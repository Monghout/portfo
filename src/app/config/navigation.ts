import {
  Home,
  User,
  Settings,
  Mail,
  Search,
  Bell,
  type LucideIcon,
} from "lucide-react";

export interface NavItem {
  icon: LucideIcon;
  label: string;
  href: string;
  id: string;
}

export const navigationConfig = {
  // Main navigation items
  main: [
    { id: "home", icon: Home, label: "Portfolio", href: "/" },
    { id: "profile", icon: User, label: "My Profile", href: "/profile" },
    // { id: "messages", icon: Mail, label: "Messages", href: "/messages" },
  ] as NavItem[],

  // Bottom navigation items (for desktop)
  bottom: [
    { id: "settings", icon: Settings, label: "Settings", href: "/settings" },
  ] as NavItem[],

  // Mobile navigation items (subset of main + settings)
  mobile: [
    { id: "home", icon: Home, label: "Portfolio", href: "/" },
    // { id: "messages", icon: Mail, label: "Messages", href: "/messages" },
    { id: "profile", icon: User, label: "My Profile", href: "/profile" },
  ] as NavItem[],
} as const;
