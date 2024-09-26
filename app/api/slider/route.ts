import type { SliderType } from "@/types";
import { NextResponse } from "next/server";

const sliders: SliderType[] = [
  {
    sliderId: "1",
    sliderIcon: "/icons/support.svg",
    sliderText: "해외 마케팅",
  },
  {
    sliderId: "2",
    sliderIcon: "/icons/media.svg",
    sliderText: "퍼블리셔",
  },
  {
    sliderId: "3",
    sliderIcon: "/icons/container.svg",
    sliderText: "캐드원(제도사)",
  },
  {
    sliderId: "4",
    sliderIcon: "/icons/compass.svg",
    sliderText: "퍼블리셔",
  },
  {
    sliderId: "5",
    sliderIcon: "/icons/call.svg",
    sliderText: "캐드원(제도사)",
  },
];

export function GET() {
  return NextResponse.json(
    { message: "Success", data: sliders },
    { status: 200 }
  );
}
