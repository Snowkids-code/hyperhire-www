import React from "react";

interface FeaturesProps {
  heading: string;
  description: string;
}

const Features: React.FC<FeaturesProps> = ({ heading, description }) => {
  return (
    <div>
      <hr />
      <h1 className="mt-3 text-[#fff] font-[900] text-[18px] leading-[27px]">
        {heading}
      </h1>
      <p className="mt-3 text-white text-opacity-80 font-[900] text-[16px] leading-[27px]">
        {description}
      </p>
    </div>
  );
};

export default Features;
