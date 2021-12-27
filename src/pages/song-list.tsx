/* eslint-disable @next/next/no-img-element */
import { GetStaticProps } from 'next';
import Link from 'next/link';
import React from 'react';

import AppShell from '@/components/layouts/AppShell';
import Seo from '@/components/Seo';

import { songs } from '@/constants/songs';
import { Song } from '@/interfaces/Song';
import { shuffle } from '@/utils/shuffle';

type Props = {
  songs: Song[];
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: { songs },
  };
};

const SongList: React.FC<Props> = ({ songs }) => {
  return (
    <AppShell>
      <Seo templateTitle='Set List' />

      <div className='relative'>
        <div className='absolute inset-0'>
          <img
            className='w-full h-full object-cover'
            src='collision-bend/band-line-up.jpg'
            alt='full band'
          />
          <div className='absolute inset-0' aria-hidden='true' />
        </div>
        <div className='relative max-w-5xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8 opacity-80'>
          <h1 className='text-right text-4xl font-extrabold tracking-tight text-gray-300 sm:text-5xl lg:text-6xl'>
            Songs
          </h1>
        </div>
      </div>

      <div className='container flex flex-wrap max-w-lg md:max-w-6xl lg:max-w-8xl mx-auto mt-16 px-2'>
        {shuffle(songs).map((el: { artist: string; title: string }) => {
          return (
            <div
              className='mr-2 mb-4 lg:mb-12 py-2 px-6 text-gray-300 rounded-full flex-col backdrop-filter backdrop-blur-lg bg-opacity-40 bg-gray-600'
              key={el.title}
            >
              <div className='font-medium text-gray-300 lg:text-2xl'>
                {el.title}
              </div>
              <div className='font-medium text-xs lg:text-sm italic text-erc-red'>
                {el.artist}
              </div>
            </div>
          );
        })}
      </div>

      <div className='mx-auto max-w-4xl lg:px-8 px-4'>
        <div className='flex justify-center mt-16'>
          <Link href='/contact'>
            <a className='px-8 py-4 text-gray-300 text-4xl  border-4 border-gray-300 hover:border-erc-yellow hover:text-erc-yellow transition duration-500 ease-in-out'>
              Book Now
            </a>
          </Link>
        </div>
      </div>
    </AppShell>
  );
};

export default SongList;
