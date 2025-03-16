"use client";
//TODO: move this client component down in deps tree
import { getAllPosts } from "@/lib/api";
import Carousel from '../components/Carousel';
import { draftMode } from "next/headers";
import Hero from '../components/Hero';
import { useBooksContext } from "@/context/itemsContext";
import MoreStories from '../components/service/service';


export default async function Page() {
  const contextValue = useBooksContext();

  if (!contextValue) {
    return <div>Loading...</div>;
  }
  return (
      <section className="flex-col items-center md:justify-between" >
        <MoreStories posts={contextValue} serviceType='libreria' />
        <Hero />
      </section>
    
  );
}