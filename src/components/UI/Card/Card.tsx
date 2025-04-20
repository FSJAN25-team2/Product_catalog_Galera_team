import React from 'react';
import { Card as MuiCard } from '@mui/material';
import { styles } from './styles';
import { SxProps, Theme } from '@mui/material/styles';

interface CardProps {
  children: React.ReactNode;
  variant?: 'elevation' | 'outlined';
  padding?: 'none' | 'small' | 'medium' | 'large';
  isHoverable?: boolean;
  sx?: SxProps<Theme>;
}

export const Card: React.FC<CardProps> = ({
  variant = 'elevation',
  padding = 'medium',
  isHoverable = false,
  children,
  sx,
  ...props
}) => {
  const cardStyles = styles[variant as keyof typeof styles];
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