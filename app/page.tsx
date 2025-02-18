import { getAllPosts } from "@/lib/api";
import Carousel from '../components/Carousel';
import { draftMode } from "next/headers";
import Hero from '../components/Hero';

export default async function Page() {
  const { isEnabled } = draftMode();
  const allPosts = await getAllPosts(isEnabled, 'pintura');
  const images = allPosts.reduce((acc, {coverImage})=> [...acc, coverImage.url], [
    "https://images.ctfassets.net/zvuvf4y77x2g/Csyhg7SRY6m0SEGO9Bp0S/93bd82f5d777c27212ffca0f0a8028dc/Screenshot_2025-02-18_at_8.22.22_AM.png",
    "https://images.ctfassets.net/zvuvf4y77x2g/1XWtSMvn3tZiNNJ1KTiDIL/6b7d0fa930f3c38d181372c3b333655a/WhatsApp_Image_2025-02-11_at_8.23.08_PM__2_.jpeg"
  ])

  return (
    <section className="flex-col items-center md:justify-between">
      {images.length && <Carousel images={images} />}
      <Hero />
    </section>
  );
}