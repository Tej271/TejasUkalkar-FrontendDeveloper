import React from "react";
import image from "../assets/banner.jpg";

const BannerSection = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${image})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% auto",
        height: "900px",
      }}
    >
      <div className="flex flex-col text-[#fff] ml-[10%] pt-20 font-medium">
        <h1 className="text-6xl leading-tight">SKY HIGH</h1>
        <p>Welcome to the world of space and space machines</p>
      </div>
    </div>
  );
};

export default BannerSection;
