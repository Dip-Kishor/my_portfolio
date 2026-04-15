import HeroBanner from "@/components/ui/HeroBanner";
import Projects from "@/components/ui/Projects";
import Services from "@/components/ui/Services";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Home | Dip Kishor Regmi",
  alternates: {
    canonical: "https://www.dipkishor.com.np",
  },
};

export default function Home() {
  return (
    <div className="mx-5 md:mx-20 theme-transition">
      <HeroBanner />
      <Services />
      <Projects />
    </div>
  );
}
