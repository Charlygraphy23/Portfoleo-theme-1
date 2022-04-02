import React from "react";
import LeftServiceSection from "./components/LeftServiceSection";
import RightServiceSection from "./components/RightServiceSection";
import ServiceCard from "./components/ServiceCard";

const ServiceSection = () => {
  return (
    <div className="serviceSection mt-5">
      <div className="row m-0 serviceSection__container">
        <div className="col-lg-7 mb-3">
          <LeftServiceSection />
        </div>

        <div className="col-lg-5 mb-3">
          <RightServiceSection />
        </div>

        <div
          className="row justify-content-center w-100 align-items-center"
          style={{
            marginTop: "5.5rem",
            marginLeft: 0,
            marginRight: 0,
            padding: 0,
          }}
        >
          <div className="col-md-6 mb-3 ">
            <div className="d-flex justify-content-end">
              <ServiceCard style={{ marginTop: "-3.5rem" }} title="Developer" />
            </div>
          </div>

          <div className="col-md-6 mb-3">
            <ServiceCard title="Ui/Ux" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
