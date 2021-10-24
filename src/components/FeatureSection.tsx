/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
/* This example requires Tailwind CSS v2.0+ */
// import { FaDrum } from 'react-icons/fa';
import Link from 'next/link';

export const FeatureSection = () => {
  return (
    <div className='relative py-24 overflow-hidden'>
      {/* One */}

      <div className='relative'>
        <div className='lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24'>
          {/* Left Text */}

          <div className='px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0'>
            <div>
              <div className='mt-6'>
                <h2 className='text-3xl font-extrabold tracking-tight text-gray-300'>
                  High-energy, Alternative Rock
                </h2>
                <p className='mt-4 text-lg text-gray-300'>
                  <strong>EndRock</strong> is a high-energy, alternative rock
                  cover band based in Cleveland, Ohio. We play alternative rock
                  from the ‘90s and early ‘00s.
                </p>
                <div className='mt-6'>
                  <Link href='/contact'>
                    <a className='inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-gray-300 bg-erc-red hover:bg-erc-yellow hover:text-erc-blue transition duration-500 ease-in-out'>
                      Book Now
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className='mt-8 pt-6'>
              <iframe
                width='560'
                height='315'
                style={{
                  maxWidth: '100%',
                }}
                src='https://www.youtube.com/embed/vI3DbQcGr7Q'
                frameBorder='0'
                allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* Image Container */}

          <div className='mt-12 sm:mt-16 lg:mt-0'>
            <div className='pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full'>
              {/* Image */}

              <img
                className='w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-10 lg:h-full lg:w-auto lg:max-w-none'
                src='collision-bend/full-band-1.jpg'
                alt='full end rock band'
              />
            </div>
          </div>
        </div>
      </div>

      {/* Two */}

      <div className='mt-24'>
        <div className='lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24'>
          <div className='px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2'>
            <div>
              <div className='mt-6'>
                <h2 className='text-3xl font-extrabold tracking-tight text-gray-300'>
                  EndRock Live in Concert
                </h2>

                <p className='mt-4 text-lg text-gray-300'>
                  Live from Garage Bar, Willoughby
                </p>

                <div className='mt-6'>
                  <Link href='/song-list'>
                    <a className='inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-gray-300 bg-erc-red hover:bg-erc-yellow hover:text-erc-blue transition duration-500 ease-in-out'>
                      See Our Set List
                    </a>
                  </Link>
                </div>

                <div className='mt-6'>
                  <iframe
                    width='560'
                    height='315'
                    src='https://www.youtube.com/embed/SyAMNObui-c'
                    style={{
                      maxWidth: '100%',
                    }}
                    frameBorder='0'
                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}

          <div className='mt-12 sm:mt-16 lg:mt-0 lg:col-start-1'>
            <div className='pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full'>
              <img
                className='w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none'
                src='collision-bend/full-band-1.jpg'
                alt='full end rock band'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
