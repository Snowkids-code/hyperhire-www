import Image from "next/image";
import React from "react";

interface CheckboxProps {
  content: string;
}

const Checkbox: React.FC<CheckboxProps> = ({ content }) => {
  return (
    <div className="flex gap-3 justify-start items-center">
      <Image alt="checkbox" src="/icons/checkbox.svg" width="24" height="24" />
      <p className="text-[#fff] font-[900] text-[18px]">{content}</p>
    </div>
  );
};

export default Checkbox;
