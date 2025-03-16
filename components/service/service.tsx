"use client"
import { useState } from "react";
import ErrorHandler from "../ErrorHandler"; 
import PostPreview from '../PostPreview/PostPreview';
import Modal from "@/components/Modal/Modal";
import "./service.css"

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
  author: string;
  excerpt: string;
  title: string;
  unitPrice: number;
  coverImage: {
    url: string;
  };
  sys: {
    id: string,
  },
};


export default function Service({ posts, serviceType }: { posts: Post[] | null; serviceType: ServiceKeys }) {
  const { serviceTitle, serviceDescription } = serviceInfo[serviceType];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);

  console.log("posts", posts);

  const openModal = (post: Post) => {
    setSelectedPost(post);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedPost(null);
    setIsModalOpen(false);
  };

  return (
    <section className="py-8 md:py-14 mx-[15%]">
      <h2 className="mb-8 text-4xl md:text-5xl font-bold tracking-tighter leading-tight">
        {serviceTitle}
      </h2>
      <span className="text-2xl pb-2 md:pt-1 md:text-2xl tracking-tighter pb-2">
        {serviceDescription}
      </span>
      {!posts || posts.length === 0 ? (
        <ErrorHandler message="Oops! Estamos preparando nuevo contenido para ti" />
      ) : (
        <div className="posts-container">
          {posts.map((post, idx) => (
            <PostPreview
              key={idx}
              title={post.title}
              coverImage={post.coverImage}
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
              selectedBook={selectedPost}
            />
        )}
    </section>
  );
}