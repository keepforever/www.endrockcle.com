/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Carousel from 'react-multi-carousel';

import { partition } from '@/utils/partition';
import { shuffle } from '@/utils/shuffle';
import { songList } from '@/utils/songList';

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

export const SongCarousel: React.FC = () => {
  const songsArrays = partition(songList, 7);

  const please = shuffle(songsArrays).map(
    (el: { artist: string; song: string }[]) => {
      return (
        <div
          key={el.join('-')}
          className='min-h-40 flex flex-wrap items-center justify-center mx-auto max-w-5xl'
        >
          {el.map((song) => (
            <div
              className='mr-3 mb-6 py-2 px-6 text-gray-300 rounded-full bg-gray-900 flex-col'
              key={song.song}
            >
              <div className='font-medium text-lg lg:text-2xl italic'>
                "{song.song}"
              </div>
              <div className='pl-2 font-medium text-xs lg:text-sm'>
                {song.artist}
              </div>
            </div>
          ))}
        </div>
      );
    }
  );

  return (
    <>
      <div className='text-center'>
        <p className='mt-1 text-4xl font-extrabold text-gray-300 sm:text-5xl sm:tracking-tight lg:text-6xl'>
          Songs You Love
        </p>
        <p className='max-w-xl mt-5 mx-auto text-xl text-gray-500'>
          Start building for free, then add a site plan to go live. Account
          plans unlock additional features.
        </p>
      </div>
      <Carousel
        autoPlay
        className='py-10'
        swipeable={true}
        draggable={true}
        showDots={true}
        responsive={responsive}
        ssr={false} // means to render carousel on server-side.
        infinite={true}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        customTransition='transition-opacity ease-in-out duration-1000'
        // containerClass='bg-green-800'
        removeArrowOnDeviceType={['tablet', 'mobile']}
      >
        {please.map((p: React.ReactNode) => p)}
      </Carousel>
    </>
  );
};
