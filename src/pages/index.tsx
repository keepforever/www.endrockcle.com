/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { FaDrum, FaGuitar } from 'react-icons/fa';

import { FeatureSection } from '@/components/FeatureSection';
import AppShell from '@/components/layouts/AppShell';
import { SongCarousel } from '@/components/SongCarousel';
// import { ScrollJunk } from '@/components/ScrollJunk';

const features = [
  {
    name: 'Competitive exchange rates',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: FaDrum,
  },
  {
    name: 'No hidden fees',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: FaGuitar,
  },
  // {
  //   name: 'Transfers are instant',
  //   description:
  //     'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
  //   icon: FaHeadphones,
  // },

  // {
  //   name: 'Butts and Butts',
  //   description:
  //     'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
  //   icon: FaPlay,
  // },
];

const HomePage: React.FC = () => {
  return (
    <AppShell>
      <div className='w-full h-screen flex justify-center items-center relative'>
        <video
          autoPlay={true}
          className='object-cover absolute h-screen w-full top-0 left-0 bottom-0 right-0'
          id='myVideo'
          src='/end-rock-hero-video.mp4'
          poster='/end-rock-stellas-large.jpg'
          playsInline={true}
          disablePictureInPicture={true}
          muted
          loop
        />

        {/* Opacity Overlay */}

        <div className='absolute h-screen opacity-50 w-full bg-gradient-to-t from-gray-900 to-gray-500' />

        <div className='absolute h-screen w-full top-0 left-0 bottom-0 right-0'>
          <div className='flex flex-col flex-wrap justify-center px-3'>
            {/* ERC Logo */}

            <div className='flex justify-center'>
              <img
                src='logo-main-for-dark-bg.png'
                alt='band logo'
                className='lg:max-w-3xl md:max-w-2xl sm:max-w-xs object-contain mt-28 mb-8'
              />
            </div>

            <div className='flex justify-center'>
              <div className='mt-10 max-w-4xl'>
                <dl className='space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10'>
                  {features.map((feature) => (
                    <div key={feature.name} className='relative'>
                      <dt>
                        <div className='absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white'>
                          <feature.icon
                            className='h-6 w-6'
                            aria-hidden='true'
                          />
                        </div>
                        <p className='ml-16 text-lg leading-6 font-medium text-gray-300'>
                          {feature.name}
                        </p>
                      </dt>
                      <dd className='mt-2 ml-16 text-base kangaroo'>
                        {feature.description}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FeatureSection />

      <SongCarousel />

      {/* <ScrollJunk /> */}
    </AppShell>
  );
};

export default HomePage;

/**
 * Default info that you should change:
 * components/Seo.tsx
 * next-sitemap.js
 * public/favicon
 *
 * Please refer to the README.md
 */
