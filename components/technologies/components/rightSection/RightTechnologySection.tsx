/* eslint-disable react/no-array-index-key */
import React from 'react';
import { TechnologyType } from '../../../../interface';
import TechImage from './components/TechImage';

type Props = {
  technology: TechnologyType;
};

const RightTechnologySection = ({ technology }: Props) => (
  <div className='rightTechnologySection'>
    <div className='rightTechnologySection__container'>
      {technology?.techImages?.map((val, i) => (
        <div key={i} className='tech__container'>
          {val?.section.map((image: any, j: number) => (
            <TechImage
              key={j}
              imgUrl={image.url}
              style={{
                marginTop: j === 1 && i === 0 ? '-4rem' : '',
                marginBottom: j === 1 && i === 2 ? '-4rem' : '',
              }}
            />
          ))}
        </div>
      ))}
      <div className='dropShadow' />
    </div>

    <div className='background__disc'>
      <div className='background__disc-container'>
        <div className='background__disc-child'>
          <div className='background__disc-child' />
        </div>
      </div>
    </div>
  </div>
);

export default RightTechnologySection;
