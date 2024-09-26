import Image from "next/image";
import React from "react";

export default function Card() {
  return (
    <div className="bg-[#fff] rounded-[12px] p-4">
      <Image
        alt="footer-icon"
        src="/icons/profile.svg"
        width="44"
        height="44"
      />
      <p className="mt-4 text-[#343741] font-[900] text-[14px]">
        해외 개발자 원격 채용
      </p>
      <div className="mt-6 flex gap-2 justify-start items-center">
        <p>바로가기</p>
        <Image
          alt="footer-icon"
          src="/icons/forward.svg"
          width="24"
          height="24"
        />
      </div>
    </div>
  );
}
