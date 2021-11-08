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
  authenticatedState: string;
};

export const getStaticProps: GetStaticProps = async () => {
  const { data: songs } = await supabase.from<Song>('songs').select('*');

  return {
    props: { songs },
  };
};

const SongList: React.FC<Props> = ({ songs, authenticatedState = '' }) => {
  const handleSubmitSong = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { value: artist } = document?.getElementById?.(
      'artist'
    ) as HTMLInputElement;

    const { value: title } = document?.getElementById?.(
      'title'
    ) as HTMLInputElement;
    let createSongResp = null;
    try {
      createSongResp = await supabase.from('songs').insert([{ artist, title }]);
      // const { data, error } = createSongResp;
    } catch (error) {
      alert('Song failed ot create. Better call Saul!');
    }
    const myForm = document?.getElementById?.('songForm') as HTMLFormElement;
    if (createSongResp) {
      alert(`Song created!`);
      myForm.reset();
    }
  };

  return (
    <AppShell authenticatedState={authenticatedState}>
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

      {authenticatedState === 'authenticated' && (
        <div className='container flex flex-wrap max-w-lg md:max-w-6xl lg:max-w-8xl mx-auto mt-16 px-2'>
          <div className='inline-block rounded-lg px-10 py-6 w-full md:w-3/6 backdrop-filter backdrop-blur-lg bg-opacity-40 bg-gray-600'>
            <form id='songForm' onSubmit={handleSubmitSong}>
              <div className='mb-4'>
                <label className='text-gray-300 font-bold'>Title</label>
                <input
                  type='title'
                  name='title'
                  id='title'
                  className='px-4 py-4 block w-full sm:text-sm rounded-md bg-gray-700 text-gray-300 bg-opacity-50 shadow-lg'
                  placeholder='Im Here For Your Wife'
                />
              </div>

              <div className='mb-6'>
                <label className='text-gray-300 font-bold'>Artist</label>
                <input
                  type='artist'
                  name='artist'
                  id='artist'
                  className='px-4 py-4 shadow-sm block w-full sm:text-sm border-gray-300 rounded-md bg-gray-700 text-gray-300  bg-opacity-50'
                  placeholder='Brian, Duh'
                />
              </div>
              <button
                type='submit'
                className='inline-flex items-center px-4 py-2 border border-transparent font-medium rounded-md text-gray-700 bg-green-400 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-300 ease-in-out'
              >
                Button text
              </button>
            </form>
          </div>
        </div>
      )}

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
