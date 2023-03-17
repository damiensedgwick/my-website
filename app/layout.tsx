import { ReactNode } from 'react';

import './styles/globals.css';
import { AppBar } from '@/app/components/appbar/AppBar';

export const metadata = {
  title: 'Damien Sedgwick | Software Engineer',
  description:
    'One day, I will have written, something really meaningful, and it will go here.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en'>
      <body>
        {children}
        <AppBar />
      </body>
    </html>
  );
}
