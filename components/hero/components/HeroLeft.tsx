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
          I,
        </h1>
        <h1 className="title__name">First Name</h1>
      </div>

      <div className="title__sub">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta libero
        vel quia, deserunt soluta, ducimus dolorem consequuntur laudantium
        doloribus dignissimos iusto nulla, quo sed quae aut fugiat qui autem
        nobis?
      </div>

      <button className="primary__button mt-5">Hire Me</button>
    </div>
  );
};

export default HeroLeft;
