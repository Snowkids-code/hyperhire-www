import Image from 'next/image'
import React from 'react'

export default function Card() {
  return (
    <div className='flex items-center gap-8 bg-[#fff] bg-opacity-20 p-4 rounded-[12px]'>
        <Image alt='card-icon' src='/icons/call.svg' width='72' height='72'/>
        <p className="text-[#fff] font-[900] text-[24px]">해외 마케팅</p>
    </div>
  )
}
