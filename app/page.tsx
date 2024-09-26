import Landing from "@/components/Homepage/Landing";
import Footer from "@/components/Layout/Footer";
import Navbar from "@/components/Layout/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Landing />
      <Footer />
    </div>
  );
}
