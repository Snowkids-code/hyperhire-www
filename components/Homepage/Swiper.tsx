"use client";

import Image from "next/image";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import SwiperCard from "../Slider/SwiperCard";

export default function Swiper() {
  return (
    <div>
      <Carousel showThumbs={false} autoPlay interval={3000} infiniteLoop transitionTime={1000}>
        <SwiperCard />
        <SwiperCard />
        <SwiperCard />
      </Carousel>
    </div>
  );
}

// <div className="">
//   <div className="bg-[#fff] p-4 py-12 flex flex-col justify-center items-center rounded-[12px]">
//     <div className="flex justify-center">
//       <Image
//         alt="picture"
//         src="/images/profile.png"
//         width="96"
//         height="156"
//         objectFit="cover"
//         className="rounded-[100%]"
//       />
//     </div>
//     <p className="text-[#000] font-[900] text-[22px] leading-[27px] mt-6">
//       Abhishek Gupta
//     </p>
//     <p className="text-[#4A77FF] font-[900] text-[18px] leading-[27px] mt-2">
//       마케팅 · 2y+
//     </p>
//     <div className="border-[2px] borer-[#C1C5CF] mt-6 py-3 px-6 rounded-[6px]">
//       <p className="text-[#5E626F] font-[900] text-[16px] leading-[27px]">
//         마케팅 콘텐츠 제작
//       </p>
//     </div>
//     <div className="border-[2px] borer-[#C1C5CF] mt-2 py-3 px-6 rounded-[6px]">
//       <p className="text-[#5E626F] font-[900] text-[16px] leading-[27px]">
//         인스타그램 관리
//       </p>
//     </div>
//     <div className="grid grid-cols-2 gap-2">
//       <div className="border-[2px] borer-[#C1C5CF] mt-2 py-3 px-6 rounded-[6px]">
//         <p className="text-[#5E626F] font-[900] text-[16px] leading-[27px]">
//           인스타그램 관리
//         </p>
//       </div>
//       <div className="border-[2px] borer-[#C1C5CF] mt-2 py-3 px-6 rounded-[6px]">
//         <p className="text-[#5E626F] font-[900] text-[16px] leading-[27px]">
//           인스타그램 관리
//         </p>
//       </div>
//     </div>
//   </div>
// </div>
