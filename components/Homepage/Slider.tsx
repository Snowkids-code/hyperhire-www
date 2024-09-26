import React from "react";
import Card from "../Slider/Card";

export default function Slider() {
  return (
    <div className="secondary-container bg-[#81C3CF] ">
      <div style={{ gridArea: "main" }}>
        <div className="hidden laptop:grid p-4 py-14 grid-cols-5 gap-6">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}
