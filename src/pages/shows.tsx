/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import AppShell from '@/components/layouts/AppShell';
import Seo from '@/components/Seo';
import UpcomingShows from '@/components/UpcomingShows';

export default function SongList() {
  return (
    <AppShell>
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

      <UpcomingShows shouldHideHeader />
    </AppShell>
  );
}
