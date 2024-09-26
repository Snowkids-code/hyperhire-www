import Image from "next/image";
import React from "react";

interface CardProps {
  icon: string;
  heading: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ icon, heading, description }) => {
  return (
    <div className="bg-[#fff] rounded-[12px] p-4">
      <Image
        alt="footer-icon"
        src={icon}
        width="44"
        height="44"
      />
      <p className="mt-4 text-[#343741] font-[900] text-[13px]">
        {heading}
      </p>
      <div className="mt-6 flex gap-2 justify-start items-center text-[13px]">
        <p>{description}</p>
        <Image
          alt="footer-icon"
          src="/icons/forward.svg"
          width="24"
          height="24"
          className="cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Card;
