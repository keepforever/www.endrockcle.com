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

import { shows2022 as shows } from '@/constants/shows2022';
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
      <div className='relative flex h-screen w-full items-center justify-center'>
        <video
          autoPlay={true}
          className='absolute inset-0 h-screen w-full object-cover'
          id='myVideo'
          src='/end-rock-hero-video.mp4'
          poster='/end-rock-stellas-large.jpg'
          playsInline={true}
          disablePictureInPicture={true}
          muted
          loop
        />

        {/* Opacity Overlay */}

        <div className='absolute h-screen w-full bg-gradient-to-t from-gray-900 to-gray-500 opacity-60' />

        <div className='absolute top-0 left-0 bottom-0 right-0 h-screen w-full'>
          <div className='flex flex-col flex-wrap justify-center px-3'>
            {/* ERC Logo */}

            <div className='flex justify-center'>
              <img
                src='logo-main-for-dark-bg.png'
                alt='band logo'
                className='mt-44 mb-8 object-contain sm:max-w-xs md:max-w-2xl lg:max-w-3xl'
              />
            </div>

            <div className='mx-auto flex w-full max-w-3xl items-center justify-center space-x-6 border-t-2 border-gray-200 border-opacity-50 pt-12'>
              <a
                href='https://www.facebook.com/EndRockCle'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FaFacebook className='h-12 w-12 text-2xl text-erc-yellow opacity-70 hover:opacity-100' />
              </a>
            </div>
          </div>
        </div>
      </div>

      <FeatureSection />
      <div className='bg-gray-600 bg-opacity-40 py-12'>
        <UpcomingShows shouldHideHeader={false} shows={shows} />
      </div>

      <div className='bg-gray-600 bg-opacity-40 py-12 mb-12'>
        <SongCarousel songs={songs} />
      </div>
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
