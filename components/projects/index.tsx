import React, { useCallback, useState } from "react";
import ProjectCard from "./components/ProjectCard";

const RecentProjects = () => {
  const [active, setActive] = useState(1);

  const handleLeft = useCallback((e) => {
    e.preventDefault();

    setActive((prevState) => {
      if (prevState !== 0) return prevState - 1;

      return 0;
    });
  }, []);

  const handleRight = useCallback((e) => {
    e.preventDefault();

    setActive((prevState) => {
      if (prevState !== 3) return prevState + 1;

      return 3;
    });
  }, []);

  return (
    <div className="recentProject">
      <div className="recentProject__container">
        <h1 className="headline1">Recent Projects</h1>

        <p className="sub__heading">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, tempora
          corporis. Voluptatem corporis ipsum id ea quo consequuntur maiores
          itaque?
        </p>

        {/* <div className="row m-0 recentProject__images">
          <div className="col-lg-4 mb-4 cols">
            <img
              src="https://www.pmi.org/-/media/pmi/other-images/learning/thought-leadership/pulse/in-depth-reports/pulse-report-2018-1200x628.jpg?v=5683730e-3651-4bdb-9585-47fca0f40f11"
              alt="project 1"
            />
          </div>
          <div className="col-lg-4 mb-4 cols">
            <img
              src="https://www.pmi.org/-/media/pmi/other-images/learning/thought-leadership/pulse/in-depth-reports/pulse-report-2018-1200x628.jpg?v=5683730e-3651-4bdb-9585-47fca0f40f11"
              alt="project 2"
            />
          </div>

          <div className="col-lg-4 mb-4 cols">
            <img
              src="https://www.pmi.org/-/media/pmi/other-images/learning/thought-leadership/pulse/in-depth-reports/pulse-report-2018-1200x628.jpg?v=5683730e-3651-4bdb-9585-47fca0f40f11"
              alt="project 3"
            />
          </div>
        </div> */}

        <div className="recentProject__carousal">
          <div className="button" style={{ flexDirection: "column" }}>
            <button onClick={handleLeft}>Prev</button>
            <button onClick={handleRight}>Next</button>
          </div>
          <div className="carousal__container">
            <div className="carousal__container--scroll">
              {/*  */}

              {/*  */}
              {Array(4)
                .fill(0)
                .map((val, i) => (
                  <ProjectCard active={active} index={i} />
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentProjects;
