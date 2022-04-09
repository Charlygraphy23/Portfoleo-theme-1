import React from "react";

const HeroLeft = () => {
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
        <h1 className="title__name">Dartcube</h1>
      </div>

      <div className="title__sub">
        We are a team of professional developers who craft solutions. We value
        our customers' time, so delivering effective solutions on time, which
        are efficient as well, is our priority. Our services include mobile
        applications(Android and iOS) and web applications.
      </div>

      <button className="primary__button mt-5">Hire Us</button>
    </div>
  );
};

export default HeroLeft;
