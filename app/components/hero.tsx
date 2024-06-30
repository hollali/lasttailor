import Image from 'next/image';
import Link from 'next/link';
import { client, urlFor } from "../lib/sanity";

async function getData() {
    const query = "*[_type == 'heroImage'][0]";

    const data = await client.fetch(query);

    return data;
}

export default async function Hero() {
    const data = await getData();
  return (
    <section className="relative w-full h-screen flex items-center justify-center bg-black">
      <div className="relative z-10 text-center text-white px-4 md:px-8 lg:px-16">
        <h1 className="mb-4 text-4xl font-bold text-light sm:text-5xl md:mb-8 md:text-6xl">
          Bringing Africa’s Finest
        </h1>
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gold mt-2">
          Non-Alcoholic Beverages
        </h2>
        <p className="text-lg md:text-xl lg:text-2xl mt-4">
          To the World!
        </p>
        <Link href="/products">
          <div className="mt-8 inline-block px-6 py-3 bg-gold text-black font-semibold text-lg rounded-full hover:bg-blink transition">
            Explore our products
          </div>
        </Link>
      </div>
      <div>
      <div>
      <Image
        src={urlFor(data.image).url()}
        alt="Hero Image"
        className="h-full w-full object-cover object-center"
        priority
        width={500}
        height={500}
      />
      </div>
      </div>
    </section>
  );
}
