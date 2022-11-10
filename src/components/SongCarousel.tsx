/* eslint-disable react/no-unescaped-entities */
import { GetStaticProps } from 'next';
import React from 'react';
import Carousel from 'react-multi-carousel';

import { songs } from '@/constants/songs';
import { Song } from '@/interfaces/Song';
import { partition } from '@/utils/partition';
import { shuffle } from '@/utils/shuffle';

import { EndRockGradientText } from './EndRockGradientText';

type Props = {
  songs: Song[];
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: { songs },
  };
};

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    // slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    // slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    // slidesToSlide: 1, // optional, default to 1.
  },
};

export const SongCarousel: React.FC<Props> = ({ songs }) => {
  const songsArrays = partition(songs, 5);

  const please = shuffle(songsArrays).map((el: Song[]) => {
    return (
      <div
        key={el.join('-')}
        className='min-h-40 flex flex-wrap justify-center mx-auto max-w-5xl'
      >
        {el.map((song) => (
          <div
            className='mr-2 mb-4 lg:mb-12 py-2 px-6 text-gray-300 rounded-full flex-col backdrop-filter backdrop-blur-lg bg-opacity-40 bg-gray-600'
            key={song.title}
          >
            <div className='font-medium text-gray-300 lg:text-2xl'>
              {song.title}
            </div>
            <div className='font-medium text-xs lg:text-sm italic text-erc-red'>
              {song.artist}
            </div>
          </div>
        ))}
      </div>
    );
  });

  return (
    <>
      <div className='text-center'>
        <p className='mt-1 text-4xl font-extrabold text-gray-300 sm:text-5xl sm:tracking-tight lg:text-6xl'>
          <EndRockGradientText className='leading-relaxed'>
            Songs You Love
          </EndRockGradientText>
        </p>
        <p className='max-w-xl mt-5 mx-auto text-xl text-gray-300'>
          Playing a mix of 90's, 00's, and a few classics.
        </p>
      </div>
      <Carousel
        autoPlay
        className='py-10'
        swipeable={true}
        draggable={false}
        showDots={false}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlaySpeed={10000}
        keyBoardControl={true}
        // containerClass='bg-green-800'
        // removeArrowOnDeviceType={['tablet', 'mobile']}
      >
        {please.map((p: React.ReactNode) => p)}
      </Carousel>
    </>
  );
};
