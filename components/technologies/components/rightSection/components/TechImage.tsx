import React from "react";

const TechImage = ({ imgUrl = "", alt = "", style = {}, className = "" }) => {
  return (
    <div className={`image__container ${className}`} style={style}>
      <img src={imgUrl} alt={alt} />
    </div>
  );
};

export default TechImage;
