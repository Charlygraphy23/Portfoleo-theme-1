import Image from 'next/image';
import React from 'react';

const TechImage = ({ imgUrl = '', alt = '', style = {}, className = '' }) => (
  <div className={`image__container ${className}`} style={style}>
    <div className='image__body'>
      <Image src={imgUrl} alt={alt} layout='fill' quality={100} />
    </div>
  </div>
);

export default TechImage;
