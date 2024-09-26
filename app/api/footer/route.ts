import type { FooterType } from "@/types";
import { NextResponse } from "next/server";

const footerData: FooterType[] = [
  {
    footerId: "1",
    footerIcon: "/icons/code.svg",
    footerHeading: "해외 개발자 원격 채용",
    footerDescription: "바로가기"
  },
  {
    footerId: "2",
    footerIcon: "/icons/profile.svg",
    footerHeading: "외국인 원격 채용 (비개발)",
    footerDescription: "바로가기"
  },
  {
    footerId: "3",
    footerIcon: "/icons/KOR.svg",
    footerHeading: "한국어 가능 외국인 채용",
    footerDescription: "바로가기"
  },
  {
    footerId: "4",
    footerIcon: "/icons/settings.svg",
    footerHeading: "해외 개발자 활용 서비스",
    footerDescription: "바로가기"
  },
];

export function GET() {
  return NextResponse.json(
    { message: "Success", data: footerData },
    { status: 200 }
  );
}