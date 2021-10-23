/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* This example requires Tailwind CSS v2.0+ */
import React from 'react';

import Navbar from './Navbar';
import Footer from '../Footer';

const AppShell: React.FC = ({ children }) => {
  return (
    <div>
      <Navbar />

      <main>
        {/* <div className='max-w-7xl mx-auto py-6 sm:px-6 lg:px-8'>{children}</div> */}
        <div>{children}</div>
      </main>
      <Footer />
    </div>
  );
};

export default AppShell;
