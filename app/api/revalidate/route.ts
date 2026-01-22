import { NextRequest, NextResponse } from "next/server";
import { revalidateTag, revalidatePath } from "next/cache";

export async function POST(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  const secret = requestHeaders.get("x-vercel-reval-key");

  if (secret !== process.env.CONTENTFUL_REVALIDATE_SECRET) {
    return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
  }

  try {
    const body = await request.json();
    const contentType = body?.sys?.contentType?.sys?.id;

    // Revalidate specific tags based on content type
    if (contentType === "book") {
      revalidateTag("posts");
      revalidatePath("/libreria");
    } else if (contentType === "pintura") {
      revalidateTag("posts");
      revalidatePath("/galeria");
    } else {
      // Revalidate all tags if content type is unknown
      revalidateTag("posts");
      revalidateTag("postsDemo");
      revalidatePath("/");
      revalidatePath("/libreria");
    }

    return NextResponse.json({
      revalidated: true,
      contentType,
      now: Date.now()
    });
  } catch (error) {
    console.error("Revalidation error:", error);
    return NextResponse.json(
      { message: "Error revalidating", error: String(error) },
      { status: 500 }
    );
  }
}
