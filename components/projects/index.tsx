import React from "react";

const RecentProjects = () => {
  return (
    <div className="recentProject">
      <div className="recentProject__container">
        <h1 className="headline1">Recent Projects</h1>

        <p className="sub__heading">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, tempora
          corporis. Voluptatem corporis ipsum id ea quo consequuntur maiores
          itaque?
        </p>

        <div className="row m-0 recentProject__images">
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
        </div>
      </div>
    </div>
  );
};

export default RecentProjects;
