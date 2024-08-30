import React from "react";

export interface ButtonSocialMediaItemProps {
  name: string;
  link: string;
  logo: React.ReactNode;
}

export interface NavigationFooterItemProps {
  name: string;
  route: string;
}

export interface NavigationFooterItem {
  id: string;
  name: string;
  route: string;
}

export interface NavigationFooterListProps {
  items: NavigationFooterItem[];
}