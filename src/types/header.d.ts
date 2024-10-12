interface LogoProps {
  width: number;
  height: number;
  isWithText?: boolean;
  isDark?: boolean;
}

interface NavItemProps {
  title: string;
  route: string;
}

interface ButtonDrawerProps {
  handleMenuOpen: () => void;
}