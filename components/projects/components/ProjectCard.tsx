/* eslint-disable prettier/prettier */
/* eslint-disable no-nested-ternary */
import React from 'react';

type Props = {
  index: number;
  active: number;
};

const ProjectCard = ({ index, active }: Props) => (
  <div
    className={`projectCard ${index === active ? 'active' : index < active ? 'left' : 'right'
      }`}
  >
    <div className='projectCard__container'>
      <img
        src='https://images.pexels.com/photos/2564475/pexels-photo-2564475.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        alt=''
      />
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat
        necessitatibus velit ratione quidem enim quod sapiente magnam ipsum
        tempore nemo, quis officiis delectus animi explicabo et quaerat
        molestiae voluptatem ab.
      </p>
    </div>
  </div>
);

export default ProjectCard;
