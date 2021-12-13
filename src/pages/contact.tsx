/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import AppShell from '@/components/layouts/AppShell';
import Seo from '@/components/Seo';

export default function Contact() {
  return (
    <AppShell>
      <Seo templateTitle='Contact' />

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

      <div className='py-20'>
        <div className='mx-auto max-w-4xl lg:px-8 px-4'>
          <div className='mb-24'>
            <div className='mt-6'>
              <h2 className='text-2xl lg:text-4xl font-extrabold tracking-tight text-gray-300'>
                Message Us for More Info
              </h2>
              {/* <dl className='mt-2 text-base text-gray-300'>
                  <div>
                    <dt className='sr-only'>Email</dt>
                    <dd>endrockcle@gmail.com</dd>
                  </div>
                  <div className='mt-1'>
                    <dt className='sr-only'>Phone Number</dt>
                    <dd>(440) 479-9073</dd>
                  </div>
                </dl> */}
              <div className='flex justify-start mt-16'>
                <a
                  href='https://www.facebook.com/EndRockCle'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='px-8 py-4 text-gray-300 text-2xl  border-4 border-gray-300 hover:border-erc-yellow hover:text-erc-yellow transition duration-500 ease-in-out'
                >
                  Facebook Messenger
                </a>
              </div>

              <div className='flex justify-start mt-16'>
                <a
                  href='mailto:endrockcle@gmail.com'
                  className='px-8 py-4 text-gray-300 text-2xl  border-4 border-gray-300 hover:border-erc-yellow hover:text-erc-yellow transition duration-500 ease-in-out'
                >
                  Direct Email <br />
                  <small>endrockcle@gmail.com</small>
                </a>
              </div>

              <div className='flex justify-start mt-16'>
                <a className='px-8 py-4 text-gray-300 text-2xl  border-4 border-gray-300 hover:border-erc-yellow hover:text-erc-yellow transition duration-500 ease-in-out'>
                  Phone <br />
                  <small>(440) 479-9073</small>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
