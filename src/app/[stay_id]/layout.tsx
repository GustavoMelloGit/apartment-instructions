import { PropsWithChildren } from 'react';

export default function StayLayout({ children }: PropsWithChildren) {
  return (
    <main className='min-h-svh flex flex-col items-center'>
      <div className='p-4 max-w-xl'>{children}</div>
    </main>
  );
}
