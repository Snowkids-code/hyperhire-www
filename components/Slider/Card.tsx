import Image from 'next/image';
import React from 'react';

interface CardProps {
  sliderIcon: string; // Expecting the icon URL
  sliderText: string; // Expecting the text for the card
}

const Card: React.FC<CardProps> = ({ sliderIcon, sliderText }) => {
  return (
    <div className='flex items-center gap-8 bg-[#fff] bg-opacity-20 p-4 rounded-[12px] mx-2'>
      <Image alt='card-icon' src={sliderIcon} width={72} height={72} />
      <p className="text-[#fff] font-[900] text-[24px]">{sliderText}</p>
    </div>
  );
};

export default Card;
