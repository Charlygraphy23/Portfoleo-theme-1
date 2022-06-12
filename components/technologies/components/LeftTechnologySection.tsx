import React from "react";
import { TechnologyType } from "../../../interface";

type Props = {
  technology: TechnologyType
}

const LeftTechnologySection = ({ technology }: Props) => {
  return (
    <div className="leftTechnologySection">
      <h1 className="heading1">Our Expertise</h1>
      <h1 className="heading2 mt-1">Technologies</h1>

      <p className="sub__heading">
        {technology?.info?.description}
      </p>

      {/* <button className="primary__button mt-4">Download Cv</button> */}
    </div>
  );
};

export default LeftTechnologySection;
