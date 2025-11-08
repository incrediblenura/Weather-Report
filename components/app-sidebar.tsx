import { Calendar, Home, Link, Inbox, Search, Settings } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const items = [
  {
    title: "Realtime",
    url: "/",
    icon: Home,
  },

  {
    title: "Forecast",
    url: "",
    icon: Link,
  },
  {
    title: "History",
    url: "#",
    icon: Link,
  },
  {
    title: "Alert",
    url: "#",
    icon: Link,
  },
  {
    title: "Settings",
    url: "#",
    icon: Link,
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Weather Report</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        {/* <SidebarGroup /> */}
      </SidebarContent>
    </Sidebar>
  );
}
