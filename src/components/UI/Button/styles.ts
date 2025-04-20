import { SxProps } from '@mui/material';
import { theme } from '../../../styles/theme';

const { colors, typography, spacing } = theme;

const baseButton: SxProps = {
  fontFamily: typography.fontFamily,
  fontSize: typography.button.fontSize,
  lineHeight: typography.button.lineHeight,
  fontWeight: typography.button.fontWeight,
  textTransform: 'uppercase',
  borderRadius: '8px',
  transition: 'all 0.3s ease',
};

export const styles = {
  primary: {
    ...baseButton,
    backgroundColor: colors.primary.main,
    color: colors.common.white,
    '&:hover': {
      backgroundColor: colors.primary.dark,
    },
    '&:disabled': {
      backgroundColor: colors.text.disabled,
      color: colors.common.white,
    },
  },

  secondary: {
    ...baseButton,
    backgroundColor: colors.secondary.main,
    color: colors.common.white,
    '&:hover': {
      backgroundColor: colors.secondary.dark,
    },
    '&:disabled': {
      backgroundColor: colors.text.disabled,
      color: colors.common.white,
    },
  },

  outlined: {
    ...baseButton,
    backgroundColor: 'transparent',
    color: colors.primary.main,
    border: `1px solid ${colors.border.main}`,
    '&:hover': {
      backgroundColor: colors.background.dark,
      borderColor: colors.border.hover,
    },
    '&:disabled': {
      borderColor: colors.text.disabled,
      color: colors.text.disabled,
    },
  },

  text: {
    ...baseButton,
    backgroundColor: 'transparent',
    color: colors.primary.main,
    '&:hover': {
      backgroundColor: colors.background.dark,
    },
    '&:disabled': {
      color: colors.text.disabled,
    },
  },

  sizes: {
    small: {
      padding: spacing.button.padding.sm,
      fontSize: typography.fontSize.sm,
    },
    medium: {
      padding: spacing.button.padding.md,
      fontSize: typography.fontSize.base,
    },
    large: {
      padding: spacing.button.padding.lg,
      fontSize: typography.fontSize.lg,
    },
  },
} satisfies Record<string, SxProps | Record<string, SxProps>>; 