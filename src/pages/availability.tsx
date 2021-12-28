/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { useState } from 'react';

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
  const [searchValue, setSearchValue] = useState<string>('');
  const [showCopyIndex, setShowCopyIndex] = useState<string>('');

  const handleCopyToClipboard = (date: string, index: string) => {
    navigator.clipboard.writeText(date);
    setShowCopyIndex(index);
    setTimeout(() => {
      setShowCopyIndex('');
    }, 2000);
  };
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

      <div className='mx-auto max-w-4xl lg:px-8 px-4'>
        <div className=''>
          <div className='mt-6'>
            <h2 className='text-2xl lg:text-4xl font-extrabold tracking-tight text-gray-300'>
              Choose From Below
            </h2>
            <p className='mt-4 text-xl text-gray-300'>
              <strong>The dates below</strong> are an approximation of our
              current availability throughout 2022. We're primarily looking for
              Fri, Sat, Sun gigs, but willing to play weekdays for select
              events.
            </p>

            <p className='mt-4 mb-6 text-sm text-gray-300'>
              <strong>Use the search box</strong> below to filter the available
              dates by day of the week (e.g. Friday, Saturday, etc.) or by month
              (e.g. Jan, Feb, etc).
            </p>
          </div>
        </div>
      </div>

      {/* Search Bar */}

      <div className='mx-auto max-w-4xl lg:px-8 px-4 text-gray-300 mb-12'>
        <label htmlFor='email' className='block text-xl font-medium'>
          Filter Dates
        </label>
        <div className='mt-3'>
          <input
            className='shadow-sm bg-gray-500 w-full md:w-3/4 text-2xl rounded-md inline-block mr-3 mb-3 placeholder-gray-200 placeholder-opacity-60'
            type='search'
            name='search'
            id='search'
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder='Friday, Saturday, March, April, etc.'
          />
          <button
            onClick={() => setSearchValue('')}
            type='button'
            className='h-full inline-flex items-center px-6 py-2 border border-gray-400 shadow-sm text-xl rounded-md text-gray-900 bg-gray-400 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400 transition duration-500 ease-in-out'
          >
            Clear Search
          </button>
        </div>
      </div>

      <div className='mx-auto max-w-4xl lg:px-8 px-4'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
          {availableDates
            .filter((date) => {
              const monthName = getMonthName(date);
              const dayName = getDayName(date);
              return (
                monthName
                  .toLowerCase()
                  .includes(searchValue.toLowerCase().trim()) ||
                dayName.toLowerCase().includes(searchValue.toLowerCase().trim())
              );
            })
            .map((date, index) => (
              <div
                key={convertDateToString(date)}
                className='flex bg-gray-600 text-gray-300 py-4 px-4 rounded-lg backdrop-filter backdrop-blur-lg bg-opacity-60 hover:shadow-lg transition duration-500 ease-in-out hover:drop-shadow-lg hover:bg-opacity-70'
              >
                <div style={{ flex: 3 }} className='flex-col w/70'>
                  <div className='font-extrabold text-2xl mb-2'>
                    {getMonthName(date)}, {getOrdinalNum(date.getDate())}
                  </div>

                  <div className='font-extrabold text-2xl mb-2'>
                    {getDayName(date)}
                  </div>
                  <div className='font-normal'>{date.toDateString()}</div>
                </div>
                <div
                  style={{ flex: 1 }}
                  className='flex justify-center items-center w/30'
                >
                  <button
                    onClick={() => {
                      handleCopyToClipboard(
                        `${getDayName(date)} ${getMonthName(
                          date
                        )}, ${getOrdinalNum(
                          date.getDate()
                        )}\n${convertDateToString(date)}`,
                        String(index)
                      );
                    }}
                    className='px-2 py-1 text-gray-300 text-md  border-2 border-gray-300 hover:border-erc-yellow hover:text-erc-yellow transition duration-500 ease-in-out'
                  >
                    {String(index) === showCopyIndex ? 'Copied!' : 'Copy'}
                  </button>
                </div>
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
