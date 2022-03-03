import { FC } from 'react';
import Head from 'next/head';

export const Layout: FC = ({ children }) => (
  <div>
    <Head>
      <title>Damien Sedgwick | Software Developer</title>
      <meta
        name='description'
        content='A better developer would have something catchy here!'
      />
      <link rel='icon' href='/favicon.ico' />
    </Head>

    {children}
  </div>
);
