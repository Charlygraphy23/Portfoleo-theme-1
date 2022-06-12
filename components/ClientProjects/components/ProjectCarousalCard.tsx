import React from "react";

type Props = {
  image: string
}

const ProjectCarousalCard = ({ image }: Props) => {
  return (
    <div
      className="projectCarousal__card"
      style={{
        backgroundImage:
          `url('${image}')`,
      }}
    ></div>
  );
};
//
export default ProjectCarousalCard;
