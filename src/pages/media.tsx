/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import fs from 'fs';
import Link from 'next/link';
import React from 'react';

import AppShell from '@/components/layouts/AppShell';
import { PageHeaderWithTitle } from '@/components/PageHeaderWithTitle';
import Seo from '@/components/Seo';

export default function Media({ images = [] }) {
  return (
    <AppShell>
      <Seo templateTitle='Media' />

      <PageHeaderWithTitle title='Media' imageUrl='media-header.jpg' />

      <div className='container grid grid-cols-1 gap-3 md:gap-12 md:grid-cols-2 px-2 mx-auto mt-20'>
        {images.map((url) => {
          return (
            <img
              key={url}
              src={`media-dump/${url}`}
              className='object-contain'
            />
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
}

export const getStaticProps = async () => {
  const files = fs.readdirSync('public/media-dump');

  return {
    props: {
      images: files.map((filename) => filename),
    },
  };
};
