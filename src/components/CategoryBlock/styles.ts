import { SxProps } from '@mui/material';
import { theme } from '../../styles/theme';

const { colors, typography, spacing } = theme;

export const styles = {
  section: {
    backgroundColor: colors.background.main,
    py: spacing.section.padding,
    mb: spacing.section.marginBottom,
  },

  title: {
    fontSize: typography.h2.fontSize,
    fontWeight: typography.h2.fontWeight,
    lineHeight: typography.h2.lineHeight,
    color: colors.text.primary,
    mb: spacing.xl,
    px: spacing.md,
  },

  categoryGrid: {
    px: spacing.md,
    display: 'grid',
    gridTemplateColumns: {
      xs: '1fr',
      md: 'repeat(3, 1fr)',
    },
    gap: spacing.lg,
  },

  categoryCard: {
    backgroundColor: colors.background.light,
    borderRadius: '8px',
    overflow: 'hidden',
    border: `1px solid ${colors.border.main}`,
    transition: 'all 0.3s ease',
    cursor: 'pointer',

    '&:hover': {
      transform: 'translateY(-4px)',
      boxShadow: '0px 4px 24px rgba(0, 0, 0, 0.15)',
      borderColor: 'transparent',
    },
  },

  imageContainer: {
    height: '368px',
    width: '100%',
    
    '& img': {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
  },

  contentContainer: {
    padding: spacing.lg,
  },

  categoryTitle: {
    fontSize: typography.h3.fontSize,
    fontWeight: typography.h3.fontWeight,
    lineHeight: typography.h3.lineHeight,
    color: colors.text.primary,
    mb: spacing.xs,
  },

  categoryCount: {
    fontSize: typography.body1.fontSize,
    lineHeight: typography.body1.lineHeight,
    color: colors.text.secondary,
  },
} satisfies Record<string, SxProps>; 