import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import { PropsWithChildren } from 'react';
import './globals.css';

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
      <head
        dangerouslySetInnerHTML={{
          __html: `<script type="text/javascript">
    (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "r1pgueco5e");
</script>`,
        }}
      />
      <body className='font-main antialiased'>{children}</body>
    </html>
  );
}
