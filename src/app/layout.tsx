import Clarity from '@microsoft/clarity';
import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import { PropsWithChildren } from 'react';
import './globals.css';

const projectId = 'r1pgueco5e';

Clarity.init(projectId);

const roboto = Roboto({
  variable: '--font-roboto',
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'Instruções de estadia',
  description:
    'Leia aqui as instruções para que você tenha uma excelente estadia.',
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang='pt-BR' className={`${roboto.variable} dark`}>
      <body className='font-main antialiased'>{children}</body>
    </html>
  );
}
