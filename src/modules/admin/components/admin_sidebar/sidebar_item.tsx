'use client';
import { SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
import { Calendar, Users } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FC, ReactNode } from 'react';

export type SidebarItemIcon = 'users' | 'calendar';

const iconMap: Record<SidebarItemIcon, ReactNode> = {
  users: <Users />,
  calendar: <Calendar />,
};

type Props = {
  icon: SidebarItemIcon;
  title: string;
  url: string;
};

export const SidebarItem: FC<Props> = ({ icon, title, url }) => {
  const pathname = usePathname();

  const isActive = pathname === url;

  return (
    <SidebarMenuItem key={title}>
      <SidebarMenuButton asChild isActive={isActive}>
        <Link href={url}>
          {iconMap[icon]}
          <span>{title}</span>
        </Link>
      </SidebarMenuButton>
    </SidebarMenuItem>
  );
};
