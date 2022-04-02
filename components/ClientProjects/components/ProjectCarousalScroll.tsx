import React from "react";
import ProjectCarousalCard from "./ProjectCarousalCard";

type Props = {
  id: string;
};

const ProjectCarousalScroll = ({ id = "" }: Props) => {
  return (
    <div id={id} className="projectCarousal">
      {Array(15)
        .fill(0)
        .map((_, i) => (
          <ProjectCarousalCard key={i} />
        ))}
    </div>
  );
};

export default ProjectCarousalScroll;
