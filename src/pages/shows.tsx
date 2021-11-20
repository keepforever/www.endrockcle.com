/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';

import AppShell from '@/components/layouts/AppShell';
import Seo from '@/components/Seo';
import UpcomingShows from '@/components/UpcomingShows';

import { Show } from '@/interfaces/Show';
import { supabase } from '@/utils/supabaseClient';

type Props = {
  shows: Show[];
  authenticatedState: string;
};

export const getStaticProps: GetStaticProps = async () => {
  const { data: shows } = await supabase.from<Show>('shows').select('*');

  return {
    props: { shows },
  };
};

const Shows: React.FC<Props> = ({ shows, authenticatedState = '' }) => {
  const router = useRouter();

  const handleSubmitShow = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { value: venueName } = document?.getElementById?.(
      'venueName'
    ) as HTMLInputElement;

    const { value: beginEnd } = document?.getElementById?.(
      'beginEnd'
    ) as HTMLInputElement;

    const { value: url } = document?.getElementById?.(
      'url'
    ) as HTMLInputElement;

    const { value: date } = document?.getElementById?.(
      'date'
    ) as HTMLInputElement;

    let createShowResp = null;
    try {
      createShowResp = await supabase.from('shows').insert([
        {
          venueName: venueName.trim(),
          beginEnd: beginEnd.trim(),
          url: url.trim(),
          date: date.trim(),
        },
      ]);
    } catch (error) {
      alert('Show failed ot create. Better call Saul!');
    }
    const myForm = document?.getElementById?.('showForm') as HTMLFormElement;
    if (createShowResp) {
      alert(`Show created!`);
      router.reload();
      myForm.reset();
    }
  };

  return (
    <AppShell authenticatedState={authenticatedState}>
      <Seo templateTitle='Shows' />

      <div className='relative'>
        <div className='absolute inset-0'>
          <img
            className='w-full h-full object-cover'
            src='collision-bend/band-line-up.jpg'
            alt='full band'
          />
          <div className='absolute inset-0' aria-hidden='true' />
        </div>
        <div className='relative max-w-5xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8 opacity-80'>
          <h1 className='text-right text-4xl font-extrabold tracking-tight text-gray-300 sm:text-5xl lg:text-6xl'>
            Upcoming Shows
          </h1>
        </div>
      </div>

      {authenticatedState === 'authenticated' && (
        <details className='container flex flex-wrap max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 mt-6'>
          <summary className='text-gray-300'>Add Show</summary>
          <div className='container flex flex-wrap max-w-7xl mx-auto'>
            <div className='inline-block rounded-lg px-10 py-6 w-full md:w-3/6 backdrop-filter backdrop-blur-lg bg-opacity-40 bg-gray-600'>
              <form id='showForm' onSubmit={handleSubmitShow}>
                <label className=' text-gray-300 font-bold mb-4'>
                  Venue Name
                </label>
                <div className='mt-2 mb-4'>
                  <input
                    type='text'
                    name='venueName'
                    id='venueName'
                    className='px-4 py-4 block w-full sm:text-sm rounded-md bg-gray-700 text-gray-300 bg-opacity-50 shadow-lg'
                    placeholder='Enter venue name'
                  />
                </div>

                <label className='text-gray-300 font-bold'>
                  Begin &mdash; End Time
                </label>
                <div className='mb-4 mt-2'>
                  <input
                    type='text'
                    name='beginEnd'
                    id='beginEnd'
                    className='px-4 py-4 shadow-sm block w-full sm:text-sm border-gray-300 rounded-md bg-gray-700 text-gray-300  bg-opacity-50'
                    placeholder='i.e. 6 pm - 9 pm (nice!)'
                  />
                </div>

                <label className='text-gray-300 font-bold'>Url</label>
                <div className='mb-4 mt-2'>
                  <input
                    type='text'
                    name='url'
                    id='url'
                    className='px-4 py-4 shadow-sm block w-full sm:text-sm border-gray-300 rounded-md bg-gray-700 text-gray-300  bg-opacity-50'
                    placeholder='https://link-to-facebook-event-or-venue-website'
                  />
                </div>

                <label className='text-gray-300 font-bold'>Date</label>
                <div className='mb-6 mt-2'>
                  <input
                    type='date'
                    id='date'
                    name='date'
                    className='px-4 py-4 shadow-sm block w-full sm:text-sm border-gray-300 rounded-md bg-gray-700 text-gray-300  bg-opacity-50'
                  />
                </div>

                <button
                  type='submit'
                  className='inline-flex items-center px-4 py-2 border border-transparent font-medium rounded-md text-gray-700 bg-green-400 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-300 ease-in-out'
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </details>
      )}

      <UpcomingShows shows={shows} shouldHideHeader />
    </AppShell>
  );
};

export default Shows;
