"use client"
import { Key, useState } from "react";
import ErrorHandler from "../ErrorHandler"; 
import SingleBook from '../SingleBook';
import Modal from "@/components/Modal/Modal";
import { useBooksContext } from "@/context/itemsContext";
import "./service.css"

type Post = {
  sys: {
    id: string,
  },
  title: string;
  coverImage: {
    url: string;
  };
  excerpt: string;
  author: string;
  unitPrice: number;
  slug: string;
};


export default function Service({  }: {  }) {
  const contextValue = useBooksContext();
  if (!contextValue) {
    return <div>Loading...</div>;
  }

  const demo = [...contextValue]

  console.log("contextValue", contextValue)
  return (
    <div className="posts-container">
      {demo.map((post: Post, idx: Key | null | undefined) => (
        <SingleBook
          key={idx}
          title={post.title}
          coverImage={post.coverImage}
          excerpt={post.excerpt}
          author={post.author}
          slug={post.slug}
        />
      ))}
    </div>
  );
}