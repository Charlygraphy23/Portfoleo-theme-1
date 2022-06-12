import React from 'react';

type Props = {
  image: string;
};

const ProjectCarousalCard = ({ image }: Props) => (
  <div
    className='projectCarousal__card'
    style={{
      backgroundImage: `url('${image}')`,
    }}
  />
);
//
export default ProjectCarousalCard;
