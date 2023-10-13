import Head from 'next/head';
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// Data
import { navLinks } from '@/assets/data';

interface IGeneralLayout {
  children: any;
  showProgressbar?: boolean;
}

const GeneralLayout: React.FC<IGeneralLayout> = ({
  children,
  showProgressbar = true,
}) => {
  return (
    <div className='flex flex-col min-h-screen'>
      <Head>
        <meta charSet="utf-8" />
      </Head>
      <Navbar navLinks={navLinks} />
      <div className="flex-1 bg-gradient-to-r from-violet-600 to-blue-700">{children}</div>
      <Footer />
    </div>
  );
};

export default GeneralLayout;