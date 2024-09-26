"use client";

import React, { useEffect, useState } from "react";
import Card from "../Slider/Card";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import type { SliderType } from "@/types";

export default function Slider() {
  const [data, setData] = useState<SliderType[]>([]);

  useEffect(() => {
    async function fetchSliderContent() {
      const response = await fetch("/api/slider", {
        method: "GET",
      });

      const res = await response.json();

      setData(res.data as SliderType[]);
    }

    fetchSliderContent();
  }, []);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  

  return (
    <div className="secondary-container bg-[#81C3CF] ">
      <div style={{ gridArea: "main" }}>
        <div className="hidden laptop:grid p-4 py-14">
          <Carousel
            swipeable={false}
            draggable={false}
            showDots={true}
            responsive={responsive}
            ssr={true}
            infinite={true}
            autoPlay
            autoPlaySpeed={5000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
            className="grid grid-cols-5 gap-6"
          >
            {data.map((value) => (
              <Card
                key={value.sliderId}
                sliderIcon={value.sliderIcon}
                sliderText={value.sliderText}
              />
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
}
