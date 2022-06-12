import React from "react";
import { CompanyInfoType } from "../../../interface";

type Props = {
  companyInfo: CompanyInfoType | null
}

const HeroLeft = ({ companyInfo }: Props) => {
  return (
    <div className="heroLeft">
      <div className="dropShadow"></div>
      <h1 className="title" style={{ fontWeight: 600 }}>
        Hey!
      </h1>
      <div className="d-flex align-items-end mt-1">
        <h1 className="title" style={{ marginRight: "0.7rem" }}>
          We'r,
        </h1>
        <h1 className="title__name">{companyInfo?.name}</h1>
      </div>

      <div className="title__sub">
        {companyInfo?.description}
      </div>

      {companyInfo?.hireUsLink && <a href={companyInfo?.hireUsLink} target="_blank">
        <button className="primary__button mt-5">Hire Us</button>
      </a>}
    </div>
  );
};

export default HeroLeft;
