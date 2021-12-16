/* eslint-disable @next/next/no-img-element */
import { GetStaticProps } from 'next';
import Head from 'next/head';
import React from 'react';
import { FaFacebook /* FaInstagramSquare */ } from 'react-icons/fa';

import { FeatureSection } from '@/components/FeatureSection';
import AppShell from '@/components/layouts/AppShell';
import Seo from '@/components/Seo';
import { SongCarousel } from '@/components/SongCarousel';
import UpcomingShows from '@/components/UpcomingShows';

import { shows } from '@/constants/shows';
import { songs } from '@/constants/songs';
import { Show } from '@/interfaces/Show';
import { Song } from '@/interfaces/Song';

type Props = {
  songs: Song[];
  shows: Show[];
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: { songs, shows },
  };
};

const HomePage: React.FC<Props> = ({ songs, shows }) => {
  return (
    <AppShell>
      <Seo templateTitle='Home' />
      <Head>
        <title>EndRock | Home</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
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
                className='lg:max-w-3xl md:max-w-2xl sm:max-w-xs object-contain mt-44 mb-8'
              />
            </div>

            <div className='flex items-center justify-center space-x-6 border-t-2 border-gray-200 border-opacity-50 w-full max-w-3xl mx-auto pt-12'>
              <a
                href='https://www.facebook.com/EndRockCle'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FaFacebook className='text-erc-yellow text-2xl h-12 w-12 opacity-70 hover:opacity-100' />
              </a>

              {/* <a
                href='https://www.instagram.com/endrockcle'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FaInstagramSquare className='text-erc-red text-2xl h-12 w-12 opacity-70 hover:opacity-100' />
              </a> */}
            </div>
          </div>
        </div>
      </div>

      <FeatureSection />

      <UpcomingShows shouldHideHeader={false} shows={shows} />

      {/* <div className='relative'>
        <div className='absolute inset-0'>
          <img
            className='w-full h-full object-cover'
            src='media-header.jpg'
            alt='full band'
          />
          <div className='absolute inset-0' aria-hidden='true' />
        </div>
        <div className='relative max-w-5xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8 opacity-0'>
          <h1 className='text-right text-4xl font-extrabold tracking-tight text-gray-300 sm:text-5xl lg:text-6xl'>
            Media
          </h1>
        </div>
      </div> */}

      <SongCarousel songs={songs} />
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
