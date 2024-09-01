export interface LogoProps {
  width: number;
  height: number;
  isWithText?: boolean;
  isDark?: boolean;
}

export interface NavItemProps {
  title: string;
  route: string;
}

export interface ButtonDrawerProps {
  handleMenuOpen: () => void;
}