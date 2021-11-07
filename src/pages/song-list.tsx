/* eslint-disable no-console */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import { GetStaticProps } from 'next';
import React from 'react';

import AppShell from '@/components/layouts/AppShell';
import Seo from '@/components/Seo';

import { Song } from '@/interfaces/Song';
import { shuffle } from '@/utils/shuffle';
import { supabase } from '@/utils/supabaseClient';

type Props = {
  songs: Song[];
};

export const getStaticProps: GetStaticProps = async () => {
  const { data: songs } = await supabase.from<Song>('songs').select('*');

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
    </AppShell>
  );
};

export default SongList;
