import { SxProps } from '@mui/material';
import { theme } from '../../styles/theme';

const { typography, spacing } = theme;

export const styles = {
  section: {
    marginBottom: spacing['3xl'],
  },

  title: {
    marginBottom: spacing.lg,
    fontSize: typography.h3.fontSize,
    fontWeight: typography.h3.fontWeight,
    lineHeight: typography.h3.lineHeight,
  },

  productGrid: {
    display: 'grid',
    gridTemplateColumns: {
      xs: '1fr',
      sm: 'repeat(2, 1fr)',
      md: 'repeat(3, 1fr)',
      lg: 'repeat(4, 1fr)',
    },
    gap: spacing.md,
  },
} satisfies Record<string, SxProps>; 