import Link from "next/link";

export async function generateStaticParams() {
  //const allPosts = await getAllPosts(false);
  const allPosts = [{ 
    title: "title",
    author: {
      name:"name",
      picture:"picture",
      date:"09-02-1997",
      content:"content",
    },
    coverImage: {
      url: "https://img.freepik.com/vector-premium/ilustracion-vectorial-dibujos-animados-dino-montando-scooter_156268-462.jpg?semt=ais_hybrid?w=2048&q=75"
    },
    slug: "post2"
  }];

  return allPosts?.map((post) => ({
    slug: post.slug,
  }));
}

export default async function PostPage({
  params,
}: {
  params: { slug: string};
  queryParams: { 
    param1?: string;
    param2?: string;
    myObject?: string;
  },
  searchParams: { 
    param1?: string;
    param2?: string;
    myObject?: string;
  }
}) {
  return (
    <div className="container mx-auto px-5">
      <h2 className="mb-20 mt-8 text-2xl font-bold leading-tight tracking-tight md:text-4xl md:tracking-tighter">
        <Link href="/" className="hover:underline">
          { JSON.stringify(params) }
        </Link>
        .
      </h2>
      <hr className="border-accent-2 mt-28 mb-24" />
    </div>
  );
}
