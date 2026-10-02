import { Hero } from "@/components/sections/hero";
import { BrandsShowcase } from "@/components/sections/brands-showcase";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col w-full">
      <Hero />
      <BrandsShowcase />
    </main>
  );
}
