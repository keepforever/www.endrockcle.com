/* eslint-disable @next/next/no-img-element */
/* This example requires Tailwind CSS v2.0+ */
import clsx from 'clsx';
import { isAfter } from 'date-fns';
import { FaGlobe } from 'react-icons/fa';

import { Show } from '@/interfaces/Show';

export default function UpcomingShows({
  shouldHideHeader = false,
  shows,
}: {
  shouldHideHeader: boolean;
  shows: Show[];
}) {
  return (
    <>
      {!shouldHideHeader && (
        <div className='text-center mb-16'>
          <p className='mt-1 text-4xl font-extrabold text-gray-300 sm:text-5xl sm:tracking-tight lg:text-6xl'>
            Upcoming Shows
          </p>
          <p className='max-w-xl mt-5 mx-auto text-xl text-gray-300'>
            Come out and enjoy the show!
          </p>
        </div>
      )}

      <div
        className={clsx('max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24', {
          'mt-24': shouldHideHeader,
        })}
      >
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
          {shows.map((s) => {
            const currentDate = new Date();
            const showDate = new Date(s.date);
            const isInFuture = isAfter(showDate, currentDate);

            // eslint-disable-next-line no-console
            console.info('\n', `s = `, s, '\n');
            // eslint-disable-next-line no-console
            console.info('\n', `isInFuture = `, isInFuture, '\n');

            return (
              <div
                className={clsx(
                  'flex-col bg-gray-600 text-gray-300 py-4 px-4 rounded-lg backdrop-filter backdrop-blur-lg bg-opacity-60 hover:shadow-lg transition duration-500 ease-in-out hover:drop-shadow-lg hover:bg-opacity-70 relative',
                  {
                    'opacity-80': !isInFuture,
                  }
                )}
                key={s.id}
              >
                {!isInFuture ? (
                  <div className='absolute top-20 left-14 text-6xl text-erc-red font-extrabold -rotate-12 opacity-70'>
                    ROCKED!
                  </div>
                ) : null}
                <div className='font-extrabold text-2xl md:text-3xl mb-1'>
                  {s.venueName}
                </div>
                <div className='font-bold text-xl mb-2 italic text-erc-yellow'>
                  {s.city}
                </div>
                <div className='font-normal text-xl'>
                  {new Date(s.date).toDateString()}
                </div>
                <div className='font-normal mb-3 text-xl'>{s.beginEnd}</div>
                {s.url && (
                  <a
                    className='flex items-center text-erc-yellow hover:text-erc-red transition duration-500 ease-in-out'
                    href={s.url}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <FaGlobe className='h-6 w-6 opacity-70 hover:opacity-100 mr-2' />
                    website
                  </a>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
