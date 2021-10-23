/* eslint-disable @next/next/no-img-element */
/* This example requires Tailwind CSS v2.0+ */
import { FaDrum } from 'react-icons/fa';

export const FeatureSection = () => {
  return (
    <div className='relative pt-8 pb-32 overflow-hidden'>
      {/* One */}

      <div className='relative'>
        <div className='lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24'>
          <div className='px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0'>
            <div>
              {/* <div>
                <span className='h-12 w-12 rounded-md flex items-center justify-center bg-indigo-600'>
                  <FaDrum
                    className='h-6 w-6 text-gray-200'
                    aria-hidden='true'
                  />
                </span>
              </div> */}
              <div className='mt-6'>
                <h2 className='text-3xl font-extrabold tracking-tight text-gray-200'>
                  Stay on top of customer support
                </h2>
                <p className='mt-4 text-lg text-gray-200'>
                  The President, Vice President and all other Officers of the
                  President from Office, or Title, of any kind whatever, from
                  any King, Prince, or foreign State.
                </p>
                <div className='mt-6'>
                  <a
                    href='#'
                    className='inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-gray-200 bg-indigo-600 hover:bg-indigo-700'
                  >
                    Get started
                  </a>
                </div>
              </div>
            </div>
            <div className='mt-8 border-t border-gray-200 pt-6'>
              <blockquote>
                <div>
                  <p className='text-base text-gray-200'>
                    If all of this sounds astonishing to you, thats because it
                    is! What does the term accounting. Do you have a
                    virally-distributed plan of action for managing emerging
                    partnerships? Without data hygiene supervising, you will
                    lack cross-media CAE.
                  </p>
                </div>
                <footer className='mt-3'>
                  <div className='flex items-center space-x-3'>
                    <div className='flex-shrink-0'>
                      <img
                        className='h-6 w-6 rounded-full'
                        src='collision-bend/full-band-1.jpg'
                        alt='full end rock band'
                      />
                    </div>
                    <div className='text-base font-medium text-gray-200'>
                      Marcia Hill, Digital Marketing Manager
                    </div>
                  </div>
                </footer>
              </blockquote>
            </div>
          </div>
          <div className='mt-12 sm:mt-16 lg:mt-0'>
            <div className='pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full'>
              <img
                className='w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none'
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
              <div>
                <span className='h-12 w-12 rounded-md flex items-center justify-center bg-indigo-600'>
                  <FaDrum
                    className='h-6 w-6 text-gray-200'
                    aria-hidden='true'
                  />
                </span>
              </div>
              <div className='mt-6'>
                <h2 className='text-3xl font-extrabold tracking-tight text-gray-900'>
                  Better understand your customers
                </h2>
                <p className='mt-4 text-lg text-gray-200'>
                  Semper curabitur ullamcorper posuere nunc sed. Ornare iaculis
                  bibendum malesuada faucibus lacinia porttitor. Pulvinar
                  laoreet sagittis viverra duis. In venenatis sem arcu pretium
                  pharetra at. Lectus viverra dui tellus ornare pharetra.
                </p>
                <div className='mt-6'>
                  <a
                    href='#'
                    className='inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-gray-200 bg-indigo-600 hover:bg-indigo-700'
                  >
                    Get started
                  </a>
                </div>
              </div>
            </div>
          </div>
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
