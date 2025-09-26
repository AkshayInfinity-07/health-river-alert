import { useState } from "react";
import { 
  Activity, 
  Droplets, 
  Users, 
  AlertTriangle, 
  BookOpen, 
  Settings, 
  Map,
  MessageSquare,
  TrendingUp,
  Shield
} from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";

const mainItems = [
  { 
    title: "Dashboard", 
    url: "/", 
    icon: Activity,
    description: "Overview & analytics"
  },
  { 
    title: "Water Quality", 
    url: "/water-quality", 
    icon: Droplets,
    description: "Real-time monitoring"
  },
  { 
    title: "Disease Surveillance", 
    url: "/disease-surveillance", 
    icon: TrendingUp,
    description: "Outbreak tracking"
  },
  { 
    title: "Community Reports", 
    url: "/community-reports", 
    icon: MessageSquare,
    description: "ASHA & volunteer reports"
  },
];

const alertItems = [
  { 
    title: "Active Alerts", 
    url: "/alerts", 
    icon: AlertTriangle,
    description: "Critical notifications"
  },
  { 
    title: "Risk Assessment", 
    url: "/risk-assessment", 
    icon: Shield,
    description: "Predictive analysis"
  },
];

const resourceItems = [
  { 
    title: "Education Hub", 
    url: "/education", 
    icon: BookOpen,
    description: "Health awareness"
  },
  { 
    title: "Interactive Map", 
    url: "/map", 
    icon: Map,
    description: "Geographic visualization"
  },
  { 
    title: "Settings", 
    url: "/settings", 
    icon: Settings,
    description: "System configuration"
  },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path: string) => currentPath === path;
  const getNavCls = ({ isActive }: { isActive: boolean }) =>
    isActive ? "bg-primary/10 text-primary font-medium border-l-2 border-primary" : "hover:bg-muted/50";

  const hasActiveItem = (items: any[]) => items.some((item) => isActive(item.url));
  const isCollapsed = state === "collapsed";

  return (
    <Sidebar
      collapsible="icon"
    >
      <SidebarContent className="bg-card border-r border-border">
        {/* Header */}
        <div className="p-4 border-b border-border">
          {!isCollapsed ? (
            <div>
              <h2 className="font-bold text-lg text-primary">Health Monitor</h2>
              <p className="text-xs text-muted-foreground">Northeast India</p>
            </div>
          ) : (
            <div className="flex justify-center">
              <Activity className="h-6 w-6 text-primary" />
            </div>
          )}
        </div>

        {/* Main Navigation */}
        <SidebarGroup>
          <SidebarGroupLabel className="text-xs font-semibold text-muted-foreground px-4">
            {!isCollapsed && "MONITORING"}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {mainItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="h-12">
                    <NavLink to={item.url} end className={getNavCls}>
                      <item.icon className={`h-5 w-5 ${isCollapsed ? 'mx-auto' : 'mr-3'}`} />
                      {!isCollapsed && (
                        <div className="flex-1">
                          <div className="font-medium text-sm">{item.title}</div>
                          <div className="text-xs text-muted-foreground">{item.description}</div>
                        </div>
                      )}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Alerts & Safety */}
        <SidebarGroup>
          <SidebarGroupLabel className="text-xs font-semibold text-muted-foreground px-4">
            {!isCollapsed && "ALERTS & SAFETY"}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {alertItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="h-12">
                    <NavLink to={item.url} end className={getNavCls}>
                      <item.icon className={`h-5 w-5 ${isCollapsed ? 'mx-auto' : 'mr-3'}`} />
                      {!isCollapsed && (
                        <div className="flex-1">
                          <div className="font-medium text-sm">{item.title}</div>
                          <div className="text-xs text-muted-foreground">{item.description}</div>
                        </div>
                      )}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Resources */}
        <SidebarGroup>
          <SidebarGroupLabel className="text-xs font-semibold text-muted-foreground px-4">
            {!isCollapsed && "RESOURCES"}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {resourceItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="h-12">
                    <NavLink to={item.url} end className={getNavCls}>
                      <item.icon className={`h-5 w-5 ${isCollapsed ? 'mx-auto' : 'mr-3'}`} />
                      {!isCollapsed && (
                        <div className="flex-1">
                          <div className="font-medium text-sm">{item.title}</div>
                          <div className="text-xs text-muted-foreground">{item.description}</div>
                        </div>
                      )}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Footer */}
        {!isCollapsed && (
          <div className="mt-auto p-4 border-t border-border">
            <div className="text-xs text-muted-foreground text-center">
              <div className="font-medium">Ministry of NER</div>
              <div>Health & Family Welfare</div>
            </div>
          </div>
        )}
      </SidebarContent>
    </Sidebar>
  );
}