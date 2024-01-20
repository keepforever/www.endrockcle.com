import clsx from 'clsx';
import { format } from 'date-fns';
import React from 'react';
import { FaChevronRight, FaGlobe } from 'react-icons/fa';

import { Show } from '@/interfaces/Show';

type Props = {
  show: Show;
};

export const ShowCardAlt: React.FC<Props> = ({ show }) => {
  const dateObject = new Date(show.date);

  return (
    <div
      key={show.id}
      className={clsx(
        'mb-6 flex gap-2 rounded bg-gray-600 bg-opacity-60 relative text-gray-200',
        show.isPast && 'opacity-75'
      )}
    >
      {show.isPast ? (
        <div className='absolute top-1/4 left-[40%] -rotate-12 opacity-60'>
          <span className='text-4xl sm:text-5xl text-erc-red tracking-tight font-extrabold'>
            Rocked
          </span>
        </div>
      ) : null}
      {/* date square */}

      <div className='flex w-16 items-center justify-center rounded bg-erc-red bg-opacity-75 py-2'>
        <div className='text-center'>
          <div className='font-semibold leading-4 text-xl mb-1'>
            {format(dateObject, 'MMM')}
          </div>
          <div className='text-2xl font-bold leading-6 tracking-wider'>
            {format(dateObject, 'dd')}
          </div>
          <div className='text-md'>{format(dateObject, 'yyyy')}</div>
        </div>
      </div>

      {/* venue and start time */}

      <div className='flex-[3] flex-col font-semibold pl-3'>
        <div className='text-sm sm:text-xl mb-1'>
          {show.venueName}, {show.city}
        </div>

        <div className='text-xs sm:text-base'>{show?.beginEnd}</div>
      </div>

      {/* links */}

      <div className='flex-col gap-2 py-2 text-sm sm:text-base'>
        {show?.url && (
          <a
            className='flex items-center text-erc-yellow transition duration-500 ease-in-out hover:text-erc-red'
            href={show?.url || '#'}
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaGlobe className='mr-2 h-4 w-4' />
            Website
          </a>
        )}
      </div>

      {/* chevron container */}

      <div className='flex flex-[0.5] justify-end pr-3 opacity-0'>
        <FaChevronRight className='text-erc-yellow transition duration-500 ease-in-out hover:text-erc-red' />
      </div>
    </div>
  );
};
