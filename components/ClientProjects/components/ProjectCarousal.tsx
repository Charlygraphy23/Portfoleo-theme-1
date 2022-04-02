import React, { useCallback } from "react";
import ProjectCarousalScroll from "./ProjectCarousalScroll";

const ProjectCarousal = () => {
  const handlePrev = useCallback((e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();

    const SCROLL_LEFT =
      document.getElementById("carousal__height")?.scrollLeft || 0;

    if (SCROLL_LEFT > 0) {
      //@ts-expect-error
      document.getElementById("carousal__height").scrollLeft =
        SCROLL_LEFT - 100;
    } else {
      //@ts-expect-error
      document.getElementById("carousal__height").scrollLeft = 0;
    }
  }, []);

  const handleNext = useCallback((e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();

    const SCROLL_LEFT =
      document.getElementById("carousal__height")?.scrollLeft || 0;

    const SCROLL_HEIGHT =
      document.getElementById("carousal__height")?.scrollWidth || 0;

    if (SCROLL_LEFT < SCROLL_HEIGHT) {
      //@ts-expect-error
      document.getElementById("carousal__height").scrollLeft =
        SCROLL_LEFT + 100;
    } else {
      //@ts-expect-error
      document.getElementById("carousal__height").scrollLeft = SCROLL_HEIGHT;
    }
  }, []);

  return (
    <div className="projectCarousal__container">
      <div className="projectCarousal__button-group">
        <button onClick={handlePrev}>Prev</button>
        <button onClick={handleNext}>Next</button>
      </div>

      <ProjectCarousalScroll id="carousal__height" />
    </div>
  );
};

export default ProjectCarousal;
