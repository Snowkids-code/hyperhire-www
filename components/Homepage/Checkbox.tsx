import Image from "next/image";
import React from "react";

export default function Checkbox() {
  return (
    <div className="flex gap-3 justify-start items-center">
      <Image alt="checkbox" src="/icons/checkbox.svg" width="24" height="24" />
      <p className="text-[#fff] font-[900] text-[18px]">한국어 능력</p>
    </div>
  );
}
