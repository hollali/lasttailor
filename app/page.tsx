import Image from "next/image";
import Hero from './components/hero';


export const dynamic = "force-dynamic";
export default function Home() {
  return (
    <div className="pb-6 sm:pb-8 lg:pb-12">
      <Hero/>
    </div>
  );
}