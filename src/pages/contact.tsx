/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import AppShell from '@/components/layouts/AppShell';
import { PageHeaderWithTitle } from '@/components/PageHeaderWithTitle';
import Seo from '@/components/Seo';

export default function Contact() {
  return (
    <AppShell>
      <Seo templateTitle='Contact' />

      <PageHeaderWithTitle title='Media' imageUrl='media-header.jpg' />

      <div className='py-20'>
        <div className='mx-auto max-w-4xl lg:px-8 px-4'>
          <div className='mb-24'>
            <div className='mt-6'>
              <h2 className='text-2xl lg:text-4xl font-extrabold tracking-tight text-gray-300'>
                Message Us for More Info
              </h2>
              <p className='mt-4 text-xl text-gray-300'>
                <strong>Now</strong> accepting dates for all of 2023! Reach out
                at any of the channels below to book us for your event.
              </p>

              <div className='flex justify-start mt-16'>
                <a
                  href='https://www.facebook.com/EndRockCle'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='px-8 py-4 text-erc-yellow text-2xl  border-4 border-gray-300 hover:border-erc-yellow hover:text-erc-yellow transition duration-500 ease-in-out'
                >
                  Facebook Messenger
                </a>
              </div>

              <div className='flex justify-start mt-16'>
                <a
                  href='mailto:endrockcle@gmail.com'
                  className='px-8 py-4 text-erc-yellow text-2xl  border-4 border-gray-300 hover:border-erc-yellow hover:text-erc-yellow transition duration-500 ease-in-out'
                >
                  Direct Email <br />
                  <small>endrockcle@gmail.com</small>
                </a>
              </div>

              <div className='flex justify-start mt-16'>
                <a className='px-8 py-4 text-erc-yellow text-2xl  border-4 border-gray-300 hover:border-erc-yellow hover:text-erc-yellow transition duration-500 ease-in-out'>
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
