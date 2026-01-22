import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { type } = body;

    if (!type || !["libreria", "galeria", "all"].includes(type)) {
      return NextResponse.json(
        { message: "Tipo inválido. Usa: libreria, galeria o all" },
        { status: 400 }
      );
    }

    // Revalidate based on type
    if (type === "libreria") {
      revalidatePath("/libreria");
      return NextResponse.json({
        success: true,
        message: "Librería actualizada exitosamente",
        revalidated: ["/libreria"],
        timestamp: new Date().toISOString(),
      });
    }

    if (type === "galeria") {
      revalidatePath("/galeria");
      return NextResponse.json({
        success: true,
        message: "Galería actualizada exitosamente",
        revalidated: ["/galeria"],
        timestamp: new Date().toISOString(),
      });
    }

    if (type === "all") {
      revalidatePath("/libreria");
      revalidatePath("/galeria");
      revalidatePath("/");
      return NextResponse.json({
        success: true,
        message: "Todo el contenido actualizado exitosamente",
        revalidated: ["/libreria", "/galeria", "/"],
        timestamp: new Date().toISOString(),
      });
    }

    return NextResponse.json(
      { message: "Error desconocido" },
      { status: 500 }
    );
  } catch (error) {
    console.error("Error en refresh-cache:", error);
    return NextResponse.json(
      { message: "Error al procesar la solicitud", error: String(error) },
      { status: 500 }
    );
  }
}
