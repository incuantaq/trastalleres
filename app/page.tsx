import Link from "next/link";
import { getAllPosts } from "@/lib/api";
import Carousel from '../components/Carousel';
import Hero from '../components/Hero';
import About from '../components/About';
import CoverImage from "./cover-image";

// Simulate fetching images from an API (replace with your actual data fetching)
async function fetchImages() {
  //  Add a delay to simulate network latency.
  await new Promise((resolve) => setTimeout(resolve, 500)); // Simulate network

  return [
    "https://fastly.picsum.photos/id/542/300/500.jpg?hmac=K72mu1z1gqystd-XZ1hdYOl2tqGotH_t6PMGebWNxq0",
    "https://fastly.picsum.photos/id/576/200/300.jpg?hmac=Uf-okGnisfAphCT3N-WTyzaG-e-r9yvOhY3W43DMWwA",
    "https://fastly.picsum.photos/id/480/200/300.jpg?hmac=-NCJbhpqFCFd17uR0DXt17Ccp5H073pZLLaStM6erZg",
    "https://fastly.picsum.photos/id/229/200/300.jpg?hmac=WD1_MXzGKrVpaJj2Utxv7FoijRJ6h4S4zrBj7wmsx1U",
    "https://fastly.picsum.photos/id/768/300/500.jpg?hmac=GW9rbas9-yYtW0aUtqIiMmfFEYxf-ckTQXGVAf_f4Ag",
    "https://fastly.picsum.photos/id/659/300/500.jpg?hmac=9cDDi2y2Q0Bc874O3Ea6vvE6VhCVIHg2fb5PNMnl-ik",
    "https://fastly.picsum.photos/id/575/300/500.jpg?hmac=iO5z6qAX4EBC-m9ibX22DkyrLBsdAoVrihLFG3Ca5eU",
    "https://fastly.picsum.photos/id/143/300/500.jpg?hmac=EjW58fgMN8WSu3XLrb29gfJwNpv4YMYCTaxpeiJFQeA",
    "https://fastly.picsum.photos/id/42/300/500.jpg?hmac=x7-Tp0g-mayzapJqO-fkqzKIm4RyyojUWVuJgGsaiUw",
  ]
}


export default async function Page() { // Note: async function!
  const images = await fetchImages();

  return (
    <section className="flex-col items-center md:justify-between px-16 md:px-12">
      <Carousel images={images} />
      <Hero />
      <About />
    </section>
  );
}