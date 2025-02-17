"use client"
import { useState } from "react";
import ErrorHandler from "../ErrorHandler/ErrorHandler"; 
import PostPreview from '../PostPreview/PostPreview';
import Modal from "@/components/Modal/Modal";

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

type Post = {
  title: string;
  coverImage: {
    url: string;
  };
  date: string;
  excerpt: string;
  author: {
    name: string;
    picture: string;
  };
  slug: string;
};


export default function Service({ posts, serviceType }: { posts: Post[] | null; serviceType: ServiceKeys }) {
  const { serviceTitle, serviceDescription } = serviceInfo[serviceType];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);

  const openModal = (post: Post) => {
    setSelectedPost(post);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedPost(null);
    setIsModalOpen(false);
  };

  return (
    <section className="px-16 md:px-20 py-14">
      <h2 className="mb-8 text-4xl md:text-5xl font-bold tracking-tighter leading-tight">
        {serviceTitle}
      </h2>
      <span className="text-2xl md:text-2xl tracking-tighter">
        {serviceDescription}
      </span>
      {!posts || posts.length === 0 ? (
        <ErrorHandler message="Oops! Estamos preparando nuevo contenido para ti" />
      ) : (
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
              onClick={() => openModal(post)}
            />
          ))}
        </div>
      )}

        {isModalOpen && selectedPost && (
            <Modal 
              isOpen={true} 
              onClose={() => setIsModalOpen(false)}
              imgSrc={selectedPost.coverImage.url} 
              artworkName={selectedPost.title}
              artistName="artistName"
              description="description"
            />
        )}
    </section>
  );
}