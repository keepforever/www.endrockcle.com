/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';

import AppShell from '@/components/layouts/AppShell';

export default function Contact() {
  return (
    <AppShell>
      <Head>
        <title>EndRock | Contact</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <div className='relative'>
        <div className='absolute inset-0'>
          <img
            className='w-full h-full object-cover'
            src='media-header.jpg'
            alt='full band'
          />
          <div className='absolute inset-0' aria-hidden='true' />
        </div>
        <div className='relative max-w-5xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8 opacity-80'>
          <h1 className='text-right text-4xl font-extrabold tracking-tight text-gray-300 sm:text-5xl lg:text-6xl'>
            Contact
          </h1>
        </div>
      </div>

      <div className='pl-6'>
        <div className='max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8'>
          <div className='lg:grid lg:grid-cols-3 lg:gap-8'>
            <h2 className='text-2xl font-extrabold text-gray-300 sm:text-3xl'>
              Get in touch
            </h2>
            <div className='mt-8 grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 lg:mt-0 lg:col-span-2'>
              <div>
                <h3 className='text-lg leading-6 font-medium text-gray-300'>
                  Call or Write
                </h3>
                <dl className='mt-2 text-base text-gray-300'>
                  <div>
                    <dt className='sr-only'>Email</dt>
                    <dd>endrockcle@gmail.com</dd>
                  </div>
                  <div className='mt-1'>
                    <dt className='sr-only'>Phone Number</dt>
                    <dd>(440) 479-9073</dd>
                  </div>
                </dl>
              </div>
              {/* <div>
                <h3 className='text-lg leading-6 font-medium text-gray-300'>
                  Press
                </h3>
                <dl className='mt-2 text-base text-gray-300'>
                  <div>
                    <dt className='sr-only'>Email</dt>
                    <dd>support@example.com</dd>
                  </div>
                  <div className='mt-1'>
                    <dt className='sr-only'>Phone number</dt>
                    <dd>+1 (555) 123-4567</dd>
                  </div>
                </dl>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
