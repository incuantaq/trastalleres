import { getAllPosts } from "@/lib/api";
import Carousel from '../components/Carousel';
import { draftMode } from "next/headers";
import Hero from '../components/Hero';

export default async function Page() {
  const { isEnabled } = draftMode();
  const allPosts = await getAllPosts(isEnabled, 'pintura');
  const images = allPosts.reduce((acc, {coverImage})=> [...acc, coverImage.url], [])

  return (
    <section
      style={{
      background: `
        linear-gradient(to bottom, #a5cbe0, transparent),
        url(https://grainy-gradients.vercel.app/noise.svg)
      `,
      }}
    >
      <Carousel images={images} />
      <Hero />
    </section>
  );
}