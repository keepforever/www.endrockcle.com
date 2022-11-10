/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import { GetStaticProps } from 'next';
import Link from 'next/link';

import AppShell from '@/components/layouts/AppShell';
import { PageHeaderWithTitle } from '@/components/PageHeaderWithTitle';
import Seo from '@/components/Seo';
import UpcomingShows from '@/components/UpcomingShows';

import { shows } from '@/constants/shows';
import { Show } from '@/interfaces/Show';

type Props = {
  shows: Show[];
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: { shows },
  };
};

const Shows: React.FC<Props> = ({ shows }) => {
  return (
    <AppShell>
      <Seo templateTitle='Shows' />

      <PageHeaderWithTitle
        title='Upcoming Shows'
        imageUrl='collision-bend/band-line-up.jpg'
      />

      <UpcomingShows shows={shows} shouldHideHeader />

      <div className='mx-auto max-w-6xl lg:px-8 px-4'>
        <div className='flex justify-center mt-16'>
          <Link href='/contact'>
            <a className='px-8 py-4 text-gray-300 text-4xl  border-4 border-gray-300 hover:border-erc-yellow hover:text-erc-yellow transition duration-500 ease-in-out'>
              Book Now
            </a>
          </Link>
        </div>
      </div>
    </AppShell>
  );
};

export default Shows;
