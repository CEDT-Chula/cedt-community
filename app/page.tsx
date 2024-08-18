import ExploreCards from "@/components/home/explore";
import HeroSection from "@/components/home/hero";
import { Toaster } from "sonner";
export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <HeroSection />
      {/* Explore CEDT Section */}
      <ExploreCards />
    </section>
  );
}
