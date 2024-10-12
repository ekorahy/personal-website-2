import React from "react";

interface ButtonSocialMediaItemProps {
  name: string;
  link: string;
  logo: React.ReactNode;
  index: number;
}

interface NavigationFooterItemProps {
  name: string;
  route: string;
}

interface NavigationFooterItem {
  id: string;
  name: string;
  route: string;
}

interface NavigationFooterListProps {
  items: NavigationFooterItem[];
}

interface CustomAlertProps {
  message: string;
  isOpen: boolean;
  onClose: () => void;
}