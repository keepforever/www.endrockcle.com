/* eslint-disable @next/next/no-img-element */
/* This example requires Tailwind CSS v2.0+ */
import clsx from 'clsx';

import { Show } from '@/interfaces/Show';

import { EndRockGradientText } from './EndRockGradientText';
import { ShowCardAlt } from './ShowCardAlt';

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
            <EndRockGradientText className='leading-relaxed'>
              Upcoming Shows
            </EndRockGradientText>
          </p>
          <p className='max-w-xl mt-5 mx-auto text-2xl text-gray-300'>
            Come out and enjoy the show!
          </p>
        </div>
      )}

      <div
        className={clsx('max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24', {
          'mt-24': shouldHideHeader,
        })}
      >
        <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
          {shows.map((s) => {
            return <ShowCardAlt key={s.id} show={s} />;
          })}
        </div>
      </div>
    </>
  );
}
