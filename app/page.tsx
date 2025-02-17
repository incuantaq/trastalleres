import Link from "next/link";
import { getAllPosts } from "@/lib/api";
import Carousel from '../components/Carousel';
import Hero from '../components/Hero';
import CoverImage from "./cover-image";

function Intro() {
  return (
    <section className="flex-col flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <Carousel />
      <Hero />
    </section>
  );
}

export default async function Page() {
  return (
    <div className="container mx-auto px-5">
      <Intro />
    </div>
  );
}
