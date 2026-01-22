import { NextRequest, NextResponse } from "next/server";

// Simple in-memory rate limiting (in production, use Redis)
const loginAttempts = new Map<string, { count: number; timestamp: number }>();

function getRateLimitKey(request: NextRequest): string {
  // Use IP address for rate limiting
  const forwarded = request.headers.get("x-forwarded-for");
  const ip = forwarded ? forwarded.split(",")[0] : "unknown";
  return ip;
}

function checkRateLimit(key: string): boolean {
  const now = Date.now();
  const attempt = loginAttempts.get(key);

  if (!attempt) {
    loginAttempts.set(key, { count: 1, timestamp: now });
    return true;
  }

  // Reset after 15 minutes
  if (now - attempt.timestamp > 15 * 60 * 1000) {
    loginAttempts.set(key, { count: 1, timestamp: now });
    return true;
  }

  // Allow max 10 attempts per 15 minutes
  if (attempt.count >= 10) {
    return false;
  }

  attempt.count++;
  return true;
}

export async function POST(request: NextRequest) {
  try {
    const rateLimitKey = getRateLimitKey(request);

    if (!checkRateLimit(rateLimitKey)) {
      return NextResponse.json(
        {
          success: false,
          message: "Demasiados intentos. Intenta en 15 minutos.",
        },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { password } = body;

    if (!password) {
      return NextResponse.json(
        { success: false, message: "Contraseña requerida" },
        { status: 400 }
      );
    }

    // Get password from environment variable
    const correctPassword = process.env.ADMIN_PASSWORD;

    if (password !== correctPassword) {
      return NextResponse.json(
        { success: false, message: "Contraseña incorrecta" },
        { status: 401 }
      );
    }

    // Create auth token
    const authToken = process.env.ADMIN_AUTH_TOKEN;
    if (!authToken) {
      console.error("Missing ADMIN_AUTH_TOKEN");
      return NextResponse.json(
        { success: false, message: "Server misconfiguration" },
        { status: 500 }
      );
    }

    // Create response with secure cookie
    const response = NextResponse.json({
      success: true,
      message: "Autenticación exitosa",
    });

    // Set httpOnly cookie for security
    response.cookies.set("admin-auth", authToken, {
      httpOnly: true, // Cannot be accessed by JavaScript
      secure: process.env.NODE_ENV === "production", // HTTPS only in production
      sameSite: "strict", // CSRF protection
      maxAge: 60 * 60 * 24 * 7, // 7 days
      path: "/admin", // Only sent to admin routes
    });

    return response;
  } catch (error) {
    console.error("Auth error:", error);
    return NextResponse.json(
      { success: false, message: "Error del servidor" },
      { status: 500 }
    );
  }
}

// Logout endpoint
export async function DELETE(request: NextRequest) {
  const response = NextResponse.json({
    success: true,
    message: "Sesión cerrada",
  });

  // Delete cookie with the same path it was created
  response.cookies.set("admin-auth", "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 0, // Expire immediately
    path: "/admin",
  });

  return response;
}
