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
                <h2 className='text-6xl font-extrabold tracking-tight text-gray-300'>
                  High-energy, Alternative Rock
                </h2>
                <p className='mt-4 text-xl text-gray-300'>
                  <strong>EndRock</strong> is a high-energy, alternative rock
                  cover band based in Cleveland, Ohio. We play alternative rock
                  from the ‘90s and early ‘00s.
                </p>
                <div className='mt-16 flex justify-center md:justify-start'>
                  <Link href='/contact'>
                    <a className=' px-8 py-4 text-gray-300 text-4xl  border-4 border-gray-300 hover:border-erc-yellow hover:text-erc-yellow transition duration-500 ease-in-out'>
                      Book Now
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div>
              <div className='mt-16'>
                <h2 className='text-3xl font-medium text-gray-300'>
                  Watch the Promo:
                </h2>
              </div>
            </div>
            <div className='pt-6'>
              <iframe
                width='600'
                height='375'
                style={{
                  maxWidth: '100%',
                  minWidth: '100%',
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
                <h2 className='text-6xl font-extrabold tracking-tight text-gray-300'>
                  EndRock Live in Concert
                </h2>

                <h2 className='text-2xl font-medium text-gray-300 mt-16'>
                  Live from Garage Bar, Willoughby:
                </h2>

                <div className='mt-6'>
                  <iframe
                    width='600'
                    height='375'
                    style={{
                      maxWidth: '100%',
                      minWidth: '100%',
                    }}
                    src='https://www.youtube.com/embed/SyAMNObui-c'
                    frameBorder='0'
                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                    allowFullScreen
                  ></iframe>
                </div>

                <div className='mt-16'>
                  <Link href='/song-list'>
                    <a className='px-8 py-4 text-gray-300 text-4xl  border-4 border-gray-300 hover:border-erc-yellow hover:text-erc-yellow transition duration-500 ease-in-out'>
                      View The Set List
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}

          <div className='mt-12 sm:mt-16 lg:mt-0 lg:col-start-1'>
            <div className='pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full'>
              <img
                className='w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none'
                src='collision-bend/clapping-vantage.jpg'
                alt='full end rock band'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
