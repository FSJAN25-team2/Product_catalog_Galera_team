import React from 'react';
import { Button as MuiButton, ButtonProps as MuiButtonProps } from '@mui/material';
import { styles } from './styles';

export interface ButtonProps extends Omit<MuiButtonProps, 'variant' | 'color'> {
  variant?: 'primary' | 'secondary' | 'outlined' | 'text';
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
  isLoading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'medium',
  fullWidth = false,
  isLoading = false,
  disabled,
  children,
  sx,
  ...props
}) => {
  const buttonStyles = styles[variant];
  const sizeStyles = styles.sizes[size];

  return (
    <MuiButton
      sx={{
        ...buttonStyles,
        ...sizeStyles,
        width: fullWidth ? '100%' : 'auto',
        ...sx,
      }}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? 'Loading...' : children}
    </MuiButton>
  );
}; 