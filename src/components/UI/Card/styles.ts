import { SxProps } from '@mui/material';
import { theme } from '../../../styles/theme';

const { colors, spacing } = theme;

const baseCard: SxProps = {
  borderRadius: '8px',
  backgroundColor: colors.background.light,
  transition: 'all 0.3s ease',
};

export const styles = {
  default: {
    ...baseCard,
    border: 'none',
    boxShadow: 'none',
  },

  outlined: {
    ...baseCard,
    border: `1px solid ${colors.border.main}`,
    boxShadow: 'none',
  },

  elevated: {
    ...baseCard,
    border: 'none',
    boxShadow: '0px 2px 16px rgba(0, 0, 0, 0.1)',
  },

  hoverable: {
    '&:hover': {
      transform: 'translateY(-4px)',
      boxShadow: '0px 4px 24px rgba(0, 0, 0, 0.15)',
    },
  },

  padding: {
    none: {
      padding: 0,
    },
    small: {
      padding: spacing.card.padding,
    },
    medium: {
      padding: spacing.lg,
    },
    large: {
      padding: spacing.xl,
    },
  },
} satisfies Record<string, SxProps | Record<string, SxProps>>; 