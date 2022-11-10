/* eslint-disable @next/next/no-img-element */
import React from 'react';

import { EndRockGradientText } from './EndRockGradientText';

type Props = {
  title: string;
  imageUrl: string;
};

export const PageHeaderWithTitle: React.FC<Props> = ({ title, imageUrl }) => {
  return (
    <div className='relative'>
      <div className='absolute inset-0'>
        <img
          className='w-full h-full object-cover'
          src={imageUrl}
          alt='full band'
        />
        <div className='absolute inset-0' aria-hidden='true' />
      </div>
      <div className='relative max-w-5xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8 opacity-80'>
        <h1 className='text-right text-4xl font-extrabold tracking-tight text-gray-300 sm:text-5xl lg:text-8xl'>
          <EndRockGradientText className='leading-relaxed'>
            {title}
          </EndRockGradientText>
        </h1>
      </div>
    </div>
  );
};
