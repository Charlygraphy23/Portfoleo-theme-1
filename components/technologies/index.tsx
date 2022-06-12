import React from 'react';
import { TechnologyType } from '../../interface';
import LeftTechnologySection from './components/LeftTechnologySection';
import RightTechnologySection from './components/rightSection/RightTechnologySection';

type Props = {
  technology: TechnologyType;
};

const Technologies = ({ technology }: Props) => (
  <div className='technologies'>
    <div className='row  m-0 technologies__container '>
      <div className='col-lg-6 mb-3' style={{ zIndex: 1 }}>
        <LeftTechnologySection technology={technology} />
      </div>

      <div className='col-lg-6 mb-3'>
        <RightTechnologySection technology={technology} />
      </div>

      <div className='dropShadow' />
    </div>
  </div>
);

export default Technologies;
