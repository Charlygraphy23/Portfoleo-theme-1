import React from 'react';
import { RecentProjectsType } from '../../interface';
import ProjectCarousal from './components/ProjectCarousal';

type Props = {
  recentProjects: RecentProjectsType | null;
  loadingImage: string;
};

const ClientProjects = ({ recentProjects, loadingImage }: Props) => (
  <div className='clientProjects'>
    <div className='clientProject__container'>
      <h1 className='heading'>
        Client's get <span>always exponential</span>
      </h1>
      <h1 className='heading'>works from me......</h1>

      <ProjectCarousal
        loadingImage={loadingImage}
        recentProjects={recentProjects}
      />
    </div>
  </div>
);

export default ClientProjects;
