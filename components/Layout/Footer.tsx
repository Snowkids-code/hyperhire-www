import Image from "next/image";
import React from "react";
import Card from "../Footer/Card";

export default function Footer() {
  return (
    <div className="primary-container bg-[#FBFBFB]">
      <div style={{ gridArea: "main" }}>
        <div className="p-4  py-14 ">
          <div className="laptop:grid grid-cols-[1fr_2fr]">
            <div>
              <Image
                alt="logo"
                src="/images/logo.png"
                width="196"
                height="196"
              />
              <p className="mt-4 text-[#343741] text-[14px] font-[900]">
                우리는 국가의 장벽을 넘어 최고의 인재를 매칭해드립니다.
              </p>
              <p className="mt-4 text-[#5E626F] font-[900] text-[13px]">
                010-0000-0000
              </p>
              <p className="mt-4 text-[#5E626F] font-[900] text-[13px]">
                aaaaa@naver.com
              </p>
            </div>
            <div className="grid grid-cols-2 grid-rows-2 mt-6 gap-3 laptop:grid-cols-4 grid-rows-1">
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
          </div>
          <div className="laptop:grid grid-cols-[1fr_2fr]">
            <div className="grid grid-cols-2 mt-12 gap-3">
              <div>
                <p className="text-[#343741] font-[900] text-[14px]">상호명</p>
                <p className="text-[#5E626F] font-[900] text-[14px] mt-2">
                  하이퍼하이어
                </p>
                <p className="text-[#5E626F] font-[900] text-[14px] mt-3">
                  Hyperhire India Private Limited
                </p>
              </div>
              <div>
                <p className="text-[#343741] font-[900] text-[14px]">
                  대표 CEO
                </p>
                <p className="text-[#5E626F] font-[900] text-[14px] mt-2">
                  김주현
                </p>
                <p className="text-[#5E626F] font-[900] text-[14px] mt-3">
                  Juhyun Kim
                </p>
              </div>
            </div>
            <div className="laptop:flex gap-12">
              <div className="flex gap-1 mt-12 flex-col">
                <p className="text-[#343741] font-[900] text-[14px]">
                  사업자등록번호 CIN
                </p>
                <p className="text-[#5E626F] font-[900] text-[14px] mt-1">
                  427-86-01187
                </p>
                <p className="text-[#5E626F] font-[900] text-[14px] mt-1">
                  U74110DL2016PTC290812{" "}
                </p>
              </div>
              <div className="flex gap-1 mt-12 flex-col">
                <p className="text-[#343741] font-[900] text-[14px]">
                  주소 ADDRESS
                </p>
                <p className="text-[#5E626F] font-[900] text-[14px] mt-1">
                  서울특별시 강남대로 479, 지하 1층 238호{" "}
                </p>
                <p className="text-[#5E626F] font-[900] text-[14px] mt-1">
                  D-138, Street number 11, Jagjeet Nagar, North <br /> East
                  Delhi, New Delhi, <br />
                  110053 India
                </p>
              </div>
            </div>
          </div>
          <p className="text-[#5E626F] font-[900] text-[14px] mt-8">
            ⓒ 2023 Hyperhire
          </p>
        </div>
      </div>
    </div>
  );
}
