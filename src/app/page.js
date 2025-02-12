import Choose from "@/components/Choose-us";
import Hero from "@/components/Hero";
import Technology from "@/components/technology";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen w-screen overflow-hidden bg-custom-gradient">
      <Hero/>
      <Choose/>
      <Technology/>
    </div>
  );
}
