import { colors } from './colors';
import { typography } from './typography';
import { spacing } from './spacing';
import { breakpoints } from './breakpoints';

export const theme = {
  colors,
  typography,
  spacing,
  breakpoints,
} as const;

export type Theme = typeof theme;
export type ColorKeys = keyof typeof colors;
export type TypographyKeys = keyof typeof typography;
export type SpacingKeys = keyof typeof spacing;
export type BreakpointKeys = keyof typeof breakpoints.values; 