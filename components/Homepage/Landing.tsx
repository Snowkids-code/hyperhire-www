"use client";

import { FeatureType } from "@/types";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Checkbox from "./Checkbox";
import Features from "./Features";
import Swiper from "./Swiper";

export default function Landing() {
  const [featureData, setFeatureData] = useState<FeatureType[]>([]);

  useEffect(() => {
    async function fetchFeaturesContent() {
      const response = await fetch("/api/features", {
        method: "GET",
      });

      const res = await response.json();

      setFeatureData(res.data as FeatureType[]);
    }

    fetchFeaturesContent();
  }, []);

  return (
    <div className="primary-container bg-[#81C3CF]">
      <div style={{ gridArea: "main" }}>
        <div className="p-4 py-16 laptop:grid grid-cols-[3fr_1.5fr] gap-4">
          <div>
            <div className="bg-[#8BC4FF] w-fit p-4 rounded-[8px]">
              <p className="text-white font-[900] text-[18px]">
                풀타임, 파트타임
              </p>
            </div>
            <p className="text-white font-[900] text-[36px] mt-6 leading-[46.8px] laptop:text-[48px] laptop:leading-[52.4px]">
              최고의 실력을 가진 외국인 인재를 찾고 계신가요?
            </p>
            <p className="text-white font-[900] text-[18px] mt-6 leading-[27px] laptop:text-[24px] laptop:leading-[34px]">
              법률 및 인사관리 부담없이 <br /> 1주일 이내에 원격으로
              채용해보세요.
            </p>
            <p className="hidden laptop:block text-[#fff] font-[900] text-[18px] leading-[27px] mt-6 underline underline-offset-4 cursor-pointer">
              개발자가 필요하신가요?
            </p>
            <div className="hidden laptop:grid mt-16 grid-cols-3 gap-12">
              {featureData.map((value) => (
                <Features
                  key={value.featureHeading}
                  heading={value.featureHeading}
                  description={value.featureDescription}
                />
              ))}
            </div>
          </div>
          <div>
            <div className="flex justify-center items-center mt-8 laptop:mt-0">
              <div className="rounded-[8px] w-fit flex gap-4 items-center bg-[#E9F7EF] py-4 px-8">
                <Image
                  alt="dollar-icon"
                  src="/icons/dollar.svg"
                  width="32"
                  height="32"
                />
                <p className="text-[#00C696] font-[900] text-[18px] leading-[27px]">
                  월 100만원
                </p>
              </div>
            </div>
            <div className="mt-8">
              <Swiper />
            </div>
          </div>
          <div className="grid grid-cols-2 grid-rows-2 mt-8 gap-4 laptop:hidden">
            <Checkbox />
            <Checkbox />
            <Checkbox />
            <Checkbox />
          </div>
          <p className="text-[#FBFF23] font-[900] text-[18px] leading-[27px] mt-6 underline underline-offset-4 laptop:hidden">
            개발자가 필요하신가요?
          </p>
        </div>
      </div>
    </div>
  );
}
