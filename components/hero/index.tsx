import React from 'react';
import { CompanyInfoType } from '../../interface';
import HeroLeft from './components/HeroLeft';
import HeroRight from './components/HeroRight';

type Props = {
  companyInfo: CompanyInfoType | null;
};

const HeroSection = (props: Props) => (
  <div className='heroSection'>
    <div className='row m-0 heroSection__container mt-5'>
      <div className='col-lg-7 mb-4'>
        <HeroLeft {...props} />
      </div>

      <div className='col-lg-5 mb-4'>
        <HeroRight {...props} />
      </div>

      <div className='dropShadow' />
    </div>
  </div>
);

export default HeroSection;
