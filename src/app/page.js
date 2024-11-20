import Image from "next/image";
import HeroSection from "./components/HeroSection";

export default function Home() {
  return (
      <main className="flex main-h-screen flex-cool bg-[#000000] container mx-auto">
        <HeroSection />
      </main>
  );
}
