import Hero from '../components/Hero';

export default async function Page() {
  return (
      <section className="flex-col items-center md:justify-between" >
        <span>general book display here!! </span>
        <Hero />
      </section>
    
  );
}