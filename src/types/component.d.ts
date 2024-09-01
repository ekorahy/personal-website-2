import React from "react";

type ButtonVariants = 'primary' | 'primary-border' | 'email' | 'secondary' | 'secondary-border'

export interface ButtonProps {
  route: string;
  name: string;
  variant: ButtonVariants;
}