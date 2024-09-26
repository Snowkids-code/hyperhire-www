// "use client"

import Landing from "@/components/Homepage/Landing";
import Slider from "@/components/Homepage/Slider";
import Footer from "@/components/Layout/Footer";
import Navbar from "@/components/Layout/Navbar";
// import type { SliderType } from "@/types";
// import { GetServerSideProps } from "next";
// import 'axios' from 'axios'

// interface HomeProps {
//   data1: SliderType | null; // Use your specific type for the slider data
// }

// export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
//   const [res1] = await Promise.all([
//     fetch(`/api/slider`), // Use BASE_URL to ensure the correct endpoint
//   ]);

//   // Check if the response is ok before parsing
//   if (!res1.ok) {
//     console.error("Failed to fetch data from API:", res1.status);
//     return { props: { data1: null } }; // Return null or a fallback value if there's an error
//   }

//   const data1: SliderType = await res1.json(); // Ensure this matches your SliderType

//   return {
//     props: { data1 },
//   };
// };

export default function Home() {
  // console.log(data1);
  
  return (
    <div className="">
      <Navbar />
      <Landing />
      <Slider />
      <Footer />
    </div>
  );
}
