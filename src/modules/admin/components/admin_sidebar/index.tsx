import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
} from '@/components/ui/sidebar';
import { Routes } from '@/lib/constants/routes';
import { FC } from 'react';
import { SidebarItem, SidebarItemIcon } from './sidebar_item';

type SidebarItem = {
  title: string;
  url: string;
  icon: SidebarItemIcon;
};

type SidebarGroup = {
  label: string;
  items: SidebarItem[];
};

const groups: SidebarGroup[] = [
  {
    label: 'Inquilino',
    items: [
      {
        title: 'Listar inquilinos',
        url: Routes.list_tenants,
        icon: 'users',
      },
    ],
  },
  {
    label: 'Estadia',
    items: [
      {
        title: 'Listar estadias',
        url: Routes.list_stays,
        icon: 'calendar',
      },
    ],
  },
];

export const AdminSidebar: FC = () => {
  return (
    <Sidebar>
      <SidebarContent>
        {groups.map((group) => (
          <SidebarGroup key={group.label}>
            <SidebarGroupLabel>{group.label}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {group.items.map((item) => {
                  return (
                    <SidebarItem
                      key={item.title}
                      icon={item.icon}
                      title={item.title}
                      url={item.url}
                    />
                  );
                })}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
    </Sidebar>
  );
};
