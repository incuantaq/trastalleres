import Link from "next/link";
import Avatar from "../../app/avatar";
import DateComponent from "../../app/date";
import CoverImage from "../../app/cover-image";

type ServiceKeys = 'libreria' | 'galeria';

const serviceInfo = {
  libreria: {
    serviceTitle: "Librería",
    serviceDescription: "Descubre una exquisita selección de libros curados por Hugo. Cada título refleja su pasión, abarcando géneros diversos y ofreciendo experiencias únicas que invitan a la reflexión y el deleite literario."
  },
  galeria: {
    serviceTitle: "Galería",
    serviceDescription: "Explora la galería artística seleccionada por Hugo, donde cada obra resalta la creatividad y la emoción. Un espacio que celebra el arte contemporáneo, invitando a la admiración y a la inspiración."
  }
}

function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
  serviceType,
}: {
  title: string;
  coverImage: any;
  date: string;
  excerpt: string;
  author: any;
  slug: string;
  serviceType: ServiceKeys;
}) {
  return (
    <div>
      <div className="mb-1 md:mb-2">
        <CoverImage title={title} slug={slug} author={author} serviceType={serviceType} url={coverImage.url} />
      </div>
      <h3 className="text-2xl mb-1 leading-snug">
        {title}
      </h3>
      {/* <div className="text-md mb-3">
        <DateComponent dateString={date} />
      </div> */}
      {/* <p className="text-lg leading-relaxed mb-4">{excerpt}</p> */}
      {author && <Avatar name={author.name} picture={author?.picture} />}
    </div>
  );
}

export default function Service({ posts, serviceType }: { posts: any[], serviceType: ServiceKeys }) {
  const {serviceTitle, serviceDescription } = serviceInfo[serviceType];
  return (
    <section className="px-16 md:px-20 py-14">
      <h2 className="mb-8 text-4xl md:text-5xl font-bold tracking-tighter leading-tight">
        {serviceTitle}
      </h2>
      <span className="text-2xl md:text-2xl  tracking-tighter ">
        {serviceDescription}
      </span>
      <div className="grid grid-cols-1 md:40 grid-cols-1 md:grid-cols-3 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32 py-6">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
            serviceType={serviceType}
          />
        ))}
      </div>
    </section>
  );
}
