/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';

import AppShell from '@/components/layouts/AppShell';
import Seo from '@/components/Seo';

import {
  availableDates,
  convertDateToString,
  getDayName,
  getMonthName,
  getOrdinalNum,
} from '@/utils/blackout';

const Shows: React.FC = () => {
  return (
    <AppShell>
      <Seo templateTitle='Availability' />

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
            Availability
          </h1>
        </div>
      </div>

      <div className='py-12'>
        <div className='mx-auto max-w-4xl lg:px-8 px-4'>
          <div className='mb-24'>
            <div className='mt-6'>
              <h2 className='text-2xl lg:text-4xl font-extrabold tracking-tight text-gray-300'>
                Choose From Below
              </h2>
              <p className='mt-4 text-xl text-gray-300'>
                <strong>The Dates Below</strong> are an approximation of our
                currently availability throughout 2022. <br /> <br /> If you
                don't see a date there you would like to book, please ask
                anyways.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className='mx-auto max-w-4xl lg:px-8 px-4'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
          {availableDates.map((date) => (
            <div
              key={convertDateToString(date)}
              className='flex-col bg-gray-600 text-gray-300 py-4 px-4 rounded-lg backdrop-filter backdrop-blur-lg bg-opacity-60 hover:shadow-lg transition duration-500 ease-in-out hover:drop-shadow-lg hover:bg-opacity-70'
            >
              <div className='font-extrabold text-2xl mb-2'>
                {getMonthName(date)}, {getOrdinalNum(date.getDate())}
              </div>

              <div className='font-extrabold text-2xl mb-2'>
                {getDayName(date)}
              </div>
              <div className='font-normal mb-4'>{date.toDateString()}</div>
              <Link href='/contact'>
                <a className='px-2 py-1 text-gray-300 text-xl  border-2 border-gray-300 hover:border-erc-yellow hover:text-erc-yellow transition duration-500 ease-in-out'>
                  Book Now
                </a>
              </Link>
            </div>
          ))}
        </div>
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

export default Shows;
