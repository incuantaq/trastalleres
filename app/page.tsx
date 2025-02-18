import { getAllPosts } from "@/lib/api";
import Carousel from '../components/Carousel';
import { draftMode } from "next/headers";
import Hero from '../components/Hero';

export default async function Page() {
  const { isEnabled } = draftMode();
  const allPosts = await getAllPosts(isEnabled, 'pintura');
  const images = allPosts.reduce((acc, {coverImage})=> [...acc, coverImage.url], [])

  return (
    <section className="flex-col items-center md:justify-between px-8 md:px-16 md:px-12">
      {images.length && <Carousel images={images} />}
      <Hero />
    </section>
  );
}