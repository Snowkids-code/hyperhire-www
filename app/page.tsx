import Landing from "@/components/Homepage/Landing";
import Slider from "@/components/Homepage/Slider";
import Footer from "@/components/Layout/Footer";
import Navbar from "@/components/Layout/Navbar";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Landing />
      <Slider />
      <Footer />
    </div>
  );
}
