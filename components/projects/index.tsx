import Image from "next/image";
import React from "react";
import { RecentProjectsType } from "../../interface";

type Props = {
  recentProjects: RecentProjectsType | null,
  loadingImage: string
}

const RecentProjects = (props: Props) => {


  const { recentProjects, loadingImage } = props

  return (
    <div className="recentProject">
      <div className="recentProject__container">
        <h1 className="headline1">Recent Projects</h1>

        <p className="sub__heading">
          {recentProjects?.description}
        </p>

        <div className="row m-0 recentProject__images">
          {recentProjects?.images.map((image, i) => <div className="col-lg-4 mb-4 cols" key={i}>
            <div className="image__container">
              <Image
                src={image}
                alt="project 1"
                className=""
                layout="fill"
                blurDataURL={loadingImage}
              />
            </div>
          </div>)}


        </div>


      </div>
    </div>
  );
};

export default RecentProjects;
