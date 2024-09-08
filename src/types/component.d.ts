import React from "react";

type ButtonVariants = 'primary' | 'primary-border' | 'email-primary' | 'email-secondary' | 'secondary' | 'secondary-border';
type ButtonLinkVariants = 'primary' | 'secondary' | 'tertiary' | 'paragraf' | 'default';
type TitleSectionVariants = 'primary' | 'secondary';
type TitleSectionSizes = '2xl' | '3xl';
type TitleSectionAlignment = 'left' | 'center';
type TitleWithDescriptionVariants = 'primary' | 'secondary';

export interface ButtonProps {
  route: string;
  name: string;
  variant: ButtonVariants;
}

export interface TitleSectionProps {
  title: string;
  isWithDash?: boolean;
  variant?: TitleSectionVariants;
  size?: TitleSectionSizes;
  alignment?: TitleSectionAlignment;
}

export interface ButtonLinkProps {
  title: string;
  route: string;
  variant: ButtonLinkVariants;
}

export interface TitleWithDescriptionProps {
  title: string;
  description: string;
  titleVariant: TitleWithDescriptionVariants;
  descriptionVariant: TitleWithDescriptionVariants;
  isWithDash?: boolean;
}

export interface ButtonArrowBackProps {
  title: string;
  route: string;
}

export interface EmphasisProps {
  isWithProjectsButton?: boolean;
}