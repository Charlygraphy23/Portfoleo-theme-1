import React from "react";
import { RecentProjectsType } from "../../../interface";
import ProjectCarousalCard from "./ProjectCarousalCard";

type Props = {
  id: string;
  recentProjects: RecentProjectsType | null,
  loadingImage: string
};



const ProjectCarousalScroll = ({ id = "", recentProjects }: Props) => {
  return (
    <div id={id} className="projectCarousal">
      {recentProjects?.images
        .map((image, i) => (
          <ProjectCarousalCard key={i} image={image} />
        ))}
    </div>
  );
};

export default ProjectCarousalScroll;
