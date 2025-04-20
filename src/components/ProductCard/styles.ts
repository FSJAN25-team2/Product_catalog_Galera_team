import { SxProps } from '@mui/material';
import { theme } from '../../styles/theme';

const { colors, typography, spacing } = theme;

export const styles = {
  card: {
    width: '272px',
    display: 'flex',
    flexDirection: 'column',
    gap: spacing.sm,
    cursor: 'pointer',
  },

  imageContainer: {
    width: '208px',
    height: '196px',
    margin: '0 auto',
    marginBottom: spacing.lg,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  image: {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
  },

  content: {
    padding: '0 !important',
  },

  title: {
    height: '42px',
    fontSize: typography.fontSize.sm,
    lineHeight: typography.lineHeight.normal,
    fontWeight: typography.fontWeights.regular,
    color: colors.text.primary,
    display: '-webkit-box',
    WebkitLineClamp: 2,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
  },

  priceBlock: {
    display: 'flex',
    alignItems: 'center',
    gap: spacing.sm,
    marginTop: spacing.sm,
    marginBottom: spacing.md,
  },

  currentPrice: {
    fontSize: typography.fontSize.base,
    lineHeight: typography.lineHeight.normal,
    fontWeight: typography.fontWeights.bold,
    color: colors.text.primary,
  },

  oldPrice: {
    fontSize: typography.fontSize.base,
    lineHeight: typography.lineHeight.normal,
    fontWeight: typography.fontWeights.bold,
    color: colors.text.secondary,
    textDecoration: 'line-through',
  },

  specsBlock: {
    display: 'flex',
    flexDirection: 'column',
    gap: spacing.sm,
    marginTop: spacing.md,
  },

  specItem: {
    display: 'flex',
    justifyContent: 'space-between',
    borderBottom: `1px solid ${colors.border.main}`,
    paddingBottom: spacing.sm,
    '&:last-child': {
      borderBottom: 'none',
    },
  },

  specLabel: {
    fontSize: typography.fontSize.xs,
    lineHeight: typography.lineHeight.tight,
    fontWeight: typography.fontWeights.regular,
    color: colors.text.secondary,
  },

  specValue: {
    fontSize: typography.fontSize.xs,
    lineHeight: typography.lineHeight.tight,
    fontWeight: typography.fontWeights.regular,
    color: colors.text.primary,
  },

  buttonsContainer: {
    display: 'flex',
    gap: spacing.sm,
    marginTop: spacing.md,
  },

  addToCartButton: {
    height: '40px',
  },

  favoriteButton: {
    minWidth: '40px',
    width: '40px',
    height: '40px',
    padding: 0,
  },
} satisfies Record<string, SxProps>; 