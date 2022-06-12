/* eslint-disable react/require-default-props */
import React from 'react';

type Props = {
  className?: string;
  style?: React.CSSProperties;
  title: string;
};

const ServiceCard = ({ className = '', style = {}, title = '' }: Props) => (
  <div className={`serviceCard ${className}`} style={style}>
    <img src='assets/smile.png' alt='smile' />

    <h3 className='title'>{title}</h3>

    <p className='description'>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error quasi
      magnam vitae? Delectus, suscipit voluptatum.
    </p>

    <button type='button' className='secondary__button'>
      Learn More
    </button>
  </div>
);

export default ServiceCard;
