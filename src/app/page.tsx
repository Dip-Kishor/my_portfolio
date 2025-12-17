import HeroBanner from "@/components/ui/HeroBanner";
import Services from "@/components/ui/Services";
import Image from "next/image";

export default function Home() {
  return (
    <div className="mx-5 md:mx-20 theme-transition">
      <HeroBanner />
      <Services />
    </div>
  );
}
