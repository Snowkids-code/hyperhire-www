import type { FeatureType } from "@/types";
import { NextResponse } from "next/server";

const featuresData: FeatureType[] = [
  {
    featureId: "1",
    featureHeading: "평균 월 120만원",
    featureDescription: "임금을 해당 국가를 기준으로 계산합니다.",
  },
  {
    featureId: "2",
    featureHeading: "최대 3회 인력교체",
    featureDescription: "막상 채용해보니 맞지 않아도 걱정하지 마세요. ",
  },
  {
    featureId: "3",
    featureHeading: "평균 3일, 최대 10일",
    featureDescription: "급하게 사람이 필요한 경우에도 빠른 채용이 가능합니다.",
  },
];

export function GET() {
  return NextResponse.json(
    { message: "Success", data: featuresData },
    { status: 200 }
  );
}
