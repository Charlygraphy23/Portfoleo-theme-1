/* eslint-disable no-unused-vars */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import { RecentProjectsType } from '../../../interface';
import ProjectCarousalCard from './ProjectCarousalCard';

type Props = {
  id: string;
  recentProjects: RecentProjectsType | null;
  loadingImage: string;
};

const ProjectCarousalScroll = ({
  id = '',
  recentProjects,
  loadingImage,
}: Props) => (
  <div id={id} className='projectCarousal'>
    {recentProjects?.images.map((image, i) => (
      <ProjectCarousalCard key={i} image={image} />
    ))}
  </div>
);

export default ProjectCarousalScroll;
