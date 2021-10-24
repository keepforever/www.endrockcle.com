/* eslint-disable @next/next/no-img-element */
/* This example requires Tailwind CSS v2.0+ */
import { FaGlobe } from 'react-icons/fa';

const shows = [
  {
    location: 'Garage Bar',
    date: new Date('10/28/1984'),
    time: '8 pm - 12 pm',
    url: 'https://www.google.com',
  },

  {
    location: 'Shooters',
    date: new Date('10/28/1984'),
    time: '8 pm - 12 pm',
    url: 'https://www.google.com',
  },

  {
    location: 'The Basement',
    date: new Date('10/28/1984'),
    time: '8 pm - 12 pm',
    url: 'https://www.google.com',
  },
];

export default function Example() {
  return (
    <>
      <div className='text-center mb-16'>
        <p className='mt-1 text-4xl font-extrabold text-gray-300 sm:text-5xl sm:tracking-tight lg:text-6xl'>
          Upcoming Shows
        </p>
        <p className='max-w-xl mt-5 mx-auto text-xl text-gray-300'>
          Come out and enjoy the show!
        </p>
      </div>

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
          {shows.map((s) => {
            return (
              <div
                className='flex-col bg-gray-800 text-gray-300 py-4 px-4 rounded-md backdrop-filter backdrop-blur-lg bg-opacity-50 hover:shadow-lg transition duration-500 ease-in-out'
                key={s.location}
              >
                <div className='font-extrabold text-2xl mb-2'>{s.location}</div>
                <div className='font-normal'>{s.date.toDateString()}</div>
                <div className='font-normal mb-2'>{s.time}</div>
                {s.url && (
                  <a
                    className='flex items-center text-erc-yellow hover:text-erc-red transition duration-500 ease-in-out'
                    href='https://www.facebook.com/EndRockCle'
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
