import { NextApiRequest, NextApiResponse } from "next";
import type { SliderType } from "@/types";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    switch (req.method) {
      case "GET":
        return getSliders(req, res);
      default:
        res.status(405).end();
        break;
    }
  }
  
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
  
  async function getSliders(req: NextApiRequest, res: NextApiResponse) {
    try {
      res.status(200).send(sliders);
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  }