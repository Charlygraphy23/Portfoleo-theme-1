import React from "react";
import LeftTechnologySection from "./components/LeftTechnologySection";
import RightTechnologySection from "./components/rightSection/RightTechnologySection";

const Technologies = () => {
  return (
    <div className="technologies">
      <div className="row  m-0 technologies__container ">
        <div className="col-lg-6 mb-3" style={{ zIndex: 1 }}>
          <LeftTechnologySection />
        </div>

        <div className="col-lg-6 mb-3">
          <RightTechnologySection />
        </div>

        <div className="dropShadow"></div>
      </div>
    </div>
  );
};

export default Technologies;
