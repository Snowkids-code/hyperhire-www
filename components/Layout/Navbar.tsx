import Image from "next/image";
import React from "react";

export default function Navbar() {
  return (
    <div className="primary-container bg-[#81C3CF]">
      <div style={{ gridArea: "main" }}>
        <div className="p-4 grid grid-cols-2 laptop:grid-cols-3">
          <div className="flex gap-2 justify-start items-center">
            <Image src="/icons/logo.svg" alt="logo" width="24" height="24" />
            <p className="text-white font-[700]">hyperhire</p>
          </div>
          <div className="flex  items-center justify-end laptop:hidden">
            <Image
              src="/icons/mobile-menu.svg"
              alt="logo"
              width="24"
              height="24"
            />
          </div>
          <div className="hidden laptop:flex laptop:justify-center laptop:items-center laptop:gap-16">
            <div className="flex items-center gap-2 cursor-pointer">
              <p className="text-[#fff] font-[900] text-[16px]">채용</p>
              <Image
                alt="chevron-down"
                src="/icons/chevron-down.svg"
                width="24"
                height="24"
              />
            </div>
            <p className="text-[#fff] font-[900] text-[16px]">
              해외 개발자 활용 서비스
            </p>
          </div>
          <div className="hidden laptop:flex laptop:justify-end laptop:items-center">
            <div className="bg-[#fff] rounded-[8px] px-6 py-2 cursor-pointer">
              <p className="text-[#4A77FF] font-[700]">문의하기</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
