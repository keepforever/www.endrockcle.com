/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import fs from 'fs';
import Head from 'next/head';

import AppShell from '@/components/layouts/AppShell';

export default function Media({ images = [] }) {
  return (
    <AppShell>
      <Head>
        <title>EndRock | Media</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <div className='relative'>
        <div className='absolute inset-0'>
          <img
            className='w-full h-full object-cover'
            src='media-header.jpg'
            alt='full band'
          />
          <div className='absolute inset-0' aria-hidden='true' />
        </div>
        <div className='relative max-w-5xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8 opacity-80'>
          <h1 className='text-right text-4xl font-extrabold tracking-tight text-gray-300 sm:text-5xl lg:text-6xl'>
            Media
          </h1>
        </div>
      </div>

      <div className='container grid grid-cols-1 gap-3 md:gap-12 md:grid-cols-2 px-2 mx-auto mt-20'>
        {images.map((url) => {
          return (
            <img key={url} src={`gallery/${url}`} className='object-contain' />
          );
        })}
      </div>
    </AppShell>
  );
}

export const getStaticProps = async () => {
  const files = fs.readdirSync('public/gallery');
  return {
    props: {
      images: files.map((filename) => filename),
    },
  };
};
