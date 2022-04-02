import React from "react";
import ProjectCarousal from "./components/ProjectCarousal";

const ClientProjects = () => {
  return (
    <div className="clientProjects">
      <div className="clientProject__container">
        <h1 className="heading">
          Client's get <span>always exponential</span>
        </h1>
        <h1 className="heading">works from me......</h1>

        <ProjectCarousal />
      </div>
    </div>
  );
};

export default ClientProjects;
