import Card from "@/components/Card";
import Choose from "@/components/Choose-us";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Partner from "@/components/Partner";
import Technology from "@/components/technology";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen w-screen overflow-hidden bg-custom-gradient">
      <Hero/>
      <Choose/>
      <Card/>
      <Technology/>
      <Experience/>
      {/* <Partner/> */}
    </div>
  );
}
