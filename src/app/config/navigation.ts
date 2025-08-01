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
    { id: "home", icon: Home, label: "Home", href: "/" },
    { id: "profile", icon: User, label: "Profile", href: "/profile" },
    { id: "messages", icon: Mail, label: "Messages", href: "/messages" },
  ] as NavItem[],

  // Mobile navigation items (subset of main + settings)
  mobile: [
    { id: "home", icon: Home, label: "Home", href: "/" },
    { id: "messages", icon: Mail, label: "Messages", href: "/messages" },
    { id: "profile", icon: User, label: "Profile", href: "/profile" },
  ] as NavItem[],
} as const;
