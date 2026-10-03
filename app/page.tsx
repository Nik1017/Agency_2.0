import { Hero } from "@/components/sections/hero";
import { BrandsShowcase } from "@/components/sections/brands-showcase";
import { ContentEcosystem } from "@/components/sections/content-ecosystem";
import { ServicesShowcase } from "@/components/sections/services-showcase";
import { Testimonials } from "@/components/sections/testimonials";
import { FAQ } from "@/components/sections/faq";

export default function Home() {
  return (
    <main className="w-full min-h-screen">
      <Hero />
      <BrandsShowcase />
      <ContentEcosystem />
      <ServicesShowcase />
      <Testimonials />
      <FAQ />
    </main>
  );
}
