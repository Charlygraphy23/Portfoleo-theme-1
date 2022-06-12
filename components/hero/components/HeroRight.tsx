import Image from 'next/image';
import React from 'react';
import { CompanyInfoType } from '../../../interface';

type Props = {
  companyInfo: CompanyInfoType | null;
};

const HeroRight = ({ companyInfo }: Props) => (
  <div className='heroRight'>
    <img className='emojis' src='assets/smile.png' alt='emojis__a' />
    <div className='avatar__container'>
      {companyInfo?.logoUrl && (
        <div className='image__container'>
          <Image
            src={companyInfo?.logoUrl}
            alt='avatar-background'
            layout='fill'
          />
        </div>
      )}
    </div>
  </div>
);

export default HeroRight;
