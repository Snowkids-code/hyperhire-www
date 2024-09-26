import type { CheckboxType } from "@/types";
import { NextResponse } from "next/server";

const checkboxData: CheckboxType[] = [
  {
    checkboxId: "1",
    checkboxContent: "한국어 능력",
  },
  {
    checkboxId: "2",
    checkboxContent: "업무 수행 능력",
  },
  {
    checkboxId: "3",
    checkboxContent: "겸업 여부",
  },
  {
    checkboxId: "4",
    checkboxContent: "평판 조회",
  },
];

export function GET() {
  return NextResponse.json(
    { message: "Success", data: checkboxData },
    { status: 200 }
  );
}
