import { NextApiRequest, NextApiResponse } from "next";
import type { SwiperType } from "@/types";
import { NextResponse } from "next/server";

const swiperData: SwiperType[] = [
  {
    swiperId: "1",
    swiperImage: "/images/profile.png",
    swiperName: "Abhishek Gupta",
    swiperHeading: "마케팅 · 2y+",
  },
  {
    swiperId: "2",
    swiperImage: "/images/profile.png",
    swiperName: "John Doe",
    swiperHeading: "마케팅 · 2y+",
  },
  {
    swiperId: "3",
    swiperImage: "/images/profile.png",
    swiperName: "Jane Doe",
    swiperHeading: "마케팅 · 2y+",
  },
];

export function GET() {
  return NextResponse.json(
    { message: "Success", data: swiperData },
    { status: 200 }
  );
}
