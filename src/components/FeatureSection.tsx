/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
/* This example requires Tailwind CSS v2.0+ */
// import { FaDrum } from 'react-icons/fa';
import Link from 'next/link';

export const FeatureSection = () => {
  return (
    <div className='relative py-24'>
      {/* One */}

      <div className='mx-auto max-w-4xl lg:px-8 px-4'>
        <div className='mb-24'>
          <div className='mt-6'>
            <h2 className='text-4xl lg:text-6xl font-extrabold tracking-tight text-gray-300'>
              High-energy, Alternative Rock
            </h2>
            <p className='mt-4 text-xl text-gray-300'>
              <strong>EndRock</strong> is a high-energy, alternative rock cover
              band based in Cleveland, Ohio. We play alternative rock from the
              ‘90s and early ‘00s.
            </p>
            <div className='flex justify-center mt-16'>
              <Link href='/contact'>
                <a className='px-8 py-4 text-gray-300 text-4xl  border-4 border-gray-300 hover:border-erc-yellow hover:text-erc-yellow transition duration-500 ease-in-out'>
                  Book Now
                </a>
              </Link>
            </div>
          </div>
        </div>

        <div>
          <div className='mt-6'>
            <h2 className='text-4xl lg:text-6xl font-extrabold tracking-tight text-gray-300'>
              Hype Video, Incoming!
            </h2>
            <p className='mt-4 text-xl text-gray-300'>
              <strong>Watch</strong> our promo video, get excited, and book us
              for your venue or private party.
            </p>
          </div>
        </div>

        <div className='pt-6 mx-auto max-w-2xl'>
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

        <div>
          <div className='mt-6'>
            <div className='flex justify-center mt-16'>
              <Link href='/media'>
                <a className='px-8 py-4 text-gray-300 text-4xl  border-4 border-gray-300 hover:border-erc-yellow hover:text-erc-yellow transition duration-500 ease-in-out'>
                  More Photos
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Two */}

      <div className='mt-24 mx-auto max-w-4xl lg:px-8 px-2'>
        <div className='mx-auto'>
          <div>
            <div className='mt-6'>
              <h2 className='text-4xl lg:text-6xl font-extrabold tracking-tight text-gray-300'>
                EndRock Live in Concert
              </h2>

              <div className='mt-6 max-w-2xl mx-auto'>
                <h2 className='text-2xl font-medium text-gray-300 mt-16'>
                  Live from Garage Bar, Willoughby:
                </h2>
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

              <div className='flex justify-center mt-16'>
                <Link href='/song-list'>
                  <a className='px-8 py-4 text-gray-300 text-4xl  border-4 border-gray-300 hover:border-erc-yellow hover:text-erc-yellow transition duration-500 ease-in-out'>
                    Song List
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
