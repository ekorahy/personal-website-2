import React from "react";

type ButtonVariants = 'primary' | 'primary-border' | 'email-primary' | 'email-secondary' | 'secondary' | 'secondary-border';
type ButtonLinkVariants = 'primary' | 'secondary' | 'tertiary' | 'paragraph' | 'default';
type TitleSectionVariants = 'primary' | 'secondary';
type TitleSectionSizes = '2xl' | '3xl';
type TitleSectionAlignment = 'left' | 'center';
type TitleWithDescriptionVariants = 'primary' | 'secondary';

interface ButtonProps {
  route: string;
  name: string;
  variant: ButtonVariants;
}

interface TitleSectionProps {
  title: string;
  isWithDash?: boolean;
  variant?: TitleSectionVariants;
  size?: TitleSectionSizes;
  alignment?: TitleSectionAlignment;
}

interface ButtonLinkProps {
  title: string;
  route: string;
  variant: ButtonLinkVariants;
}

interface TitleWithDescriptionProps {
  title: string;
  description: string;
  titleVariant: TitleWithDescriptionVariants;
  descriptionVariant: TitleWithDescriptionVariants;
  isWithDash?: boolean;
  alignment?: TitleSectionAlignment
}

interface ButtonArrowBackProps {
  title: string;
  route: string;
}

interface EmphasisProps {
  isWithProjectsButton?: boolean;
}