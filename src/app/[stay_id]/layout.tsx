import { PropsWithChildren } from 'react';

export default function StayLayout({ children }: PropsWithChildren) {
  return (
    <main className='min-h-svh flex flex-col items-center'>{children}</main>
  );
}
