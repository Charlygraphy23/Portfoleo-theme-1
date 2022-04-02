import React, { useMemo } from "react";
import { TECH_IMAGES } from "../../../../config/app";
import TechImage from "./components/TechImage";

const RightTechnologySection = () => {
  const IMAGES = useMemo(() => TECH_IMAGES, []);

  return (
    <div className="rightTechnologySection">
      <div className="rightTechnologySection__container">
        {IMAGES.map((val, i) => (
          <div key={i} className="tech__container">
            {val.section.map((image, j) => (
              <TechImage
                key={j}
                imgUrl={image.url}
                style={{
                  marginTop: j == 1 && i == 0 ? "-4rem" : "",
                  marginBottom: j == 1 && i == 2 ? "-4rem" : "",
                }}
              />
            ))}
          </div>
        ))}
        <div className="dropShadow"></div>
      </div>

      <div className="background__disc">
        <div className="background__disc-container">
          <div className="background__disc-child">
            <div className="background__disc-child"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightTechnologySection;
