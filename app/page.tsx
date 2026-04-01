import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Preview } from "@/components/Preview";
import { AISection } from "@/components/AISection";
import { Savings } from "@/components/Savings";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Features />
      <Preview />
      <AISection />
      <Savings />
      <CTA />
      <Footer />
    </main>
  );
}
