/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
/* This example requires Tailwind CSS v2.0+ */
// import { FaDrum } from 'react-icons/fa';

export const FeatureSection = () => {
  return (
    <div className='relative pt-32 pb-32 overflow-hidden'>
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
                  End Rock is a high-energy, alternative rock cover band based
                  in Cleveland, Ohio. We play alternative rock from the ‘90s and
                  early ‘00s, and also like to break out a classic or two when
                  the crowd is feeling it.
                </p>
                <div className='mt-6'>
                  <a
                    href='#'
                    className='inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-gray-300 bg-indigo-600 hover:bg-indigo-700'
                  >
                    Get started
                  </a>
                </div>
              </div>
            </div>
            <div className='mt-8 border-t border-gray-200 pt-6'>
              <blockquote>
                <div>
                  <p className='text-base text-gray-300'>
                    If all of this sounds astonishing to you, that's because it
                    is! What does the term accounting. Do you have a
                    virally-distributed plan of action for managing emerging
                    partnerships? Without data hygiene supervising, you will
                    lack cross-media CAE.
                  </p>
                </div>

                {/* Footer */}

                <footer className='mt-3'>
                  <div className='flex items-center space-x-3'>
                    <div className='flex-shrink-0'>
                      <img
                        className='h-6 w-6 rounded-full'
                        src='collision-bend/full-band-1.jpg'
                        alt='full end rock band'
                      />
                    </div>
                    <div className='text-base font-medium text-gray-300'>
                      Marcia Hill, Digital Marketing Manager
                    </div>
                  </div>
                </footer>
              </blockquote>
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
                  Better understand your customers
                </h2>
                <p className='mt-4 text-lg text-gray-300'>
                  Semper curabitur ullamcorper posuere nunc sed. Ornare iaculis
                  bibendum malesuada faucibus lacinia porttitor. Pulvinar
                  laoreet sagittis viverra duis. In venenatis sem arcu pretium
                  pharetra at. Lectus viverra dui tellus ornare pharetra.
                </p>
                <div className='mt-6'>
                  <a
                    href='#'
                    className='inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-gray-300 bg-indigo-600 hover:bg-indigo-700'
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
