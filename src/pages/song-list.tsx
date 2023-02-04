/* eslint-disable @next/next/no-img-element */
import { GetStaticProps } from 'next';
import Link from 'next/link';
import React from 'react';

import AppShell from '@/components/layouts/AppShell';
import { PageHeaderWithTitle } from '@/components/PageHeaderWithTitle';
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

      <PageHeaderWithTitle
        title='Songs We Play'
        imageUrl='collision-bend/band-line-up.jpg'
      />

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
