import React from 'react';
import { Card as MuiCard, CardProps as MuiCardProps } from '@mui/material';
import { styles } from './styles';

export interface CardProps extends MuiCardProps {
  variant?: 'default' | 'outlined' | 'elevated';
  padding?: 'none' | 'small' | 'medium' | 'large';
  isHoverable?: boolean;
}

export const Card: React.FC<CardProps> = ({
  variant = 'default',
  padding = 'medium',
  isHoverable = false,
  children,
  sx,
  ...props
}) => {
  const cardStyles = styles[variant];
  const paddingStyles = styles.padding[padding];

  return (
    <MuiCard
      sx={{
        ...cardStyles,
        ...paddingStyles,
        ...(isHoverable && styles.hoverable),
        ...sx,
      }}
      {...props}
    >
      {children}
    </MuiCard>
  );
}; 