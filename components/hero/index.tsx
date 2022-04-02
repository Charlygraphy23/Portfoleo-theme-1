import React from "react";
import HeroLeft from "./components/HeroLeft";
import HeroRight from "./components/HeroRight";

const HeroSection = () => {
  return (
    <div className="heroSection">
      <div className="row m-0 heroSection__container mt-5">
        <div className="col-lg-7 mb-4">
          <HeroLeft />
        </div>

        <div className="col-lg-5 mb-4">
          <HeroRight />
        </div>

        <div className="dropShadow"></div>
      </div>
    </div>
  );
};

export default HeroSection;
