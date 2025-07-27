import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { AdminSidebar } from '@/modules/admin/components/admin_sidebar';
import { PropsWithChildren } from 'react';

export default function AdminLayout({ children }: PropsWithChildren) {
  return (
    <SidebarProvider>
      <AdminSidebar />
      <main className='min-h-svh w-full px-4 md:px-6'>
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  );
}
