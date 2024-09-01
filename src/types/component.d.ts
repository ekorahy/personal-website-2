import React from "react";

type ButtonVariants = 'primary' | 'primary-border' | 'email-primary' | 'email-secondary' | 'secondary' | 'secondary-border';
type ButtonLinkVariants = 'primary' | 'secondary' | 'tertiary' | 'paragraf' | 'default';

export interface ButtonProps {
  route: string;
  name: string;
  variant: ButtonVariants;
}

export interface TitleSectionProps {
  title: string;
  isWithDash?: boolean;
}

export interface ButtonLinkProps {
  title: string;
  route: string;
  variant: ButtonLinkVariants;
}