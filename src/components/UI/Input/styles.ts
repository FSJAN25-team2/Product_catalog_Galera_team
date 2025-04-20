import { SxProps } from '@mui/material';
import { theme } from '../../../styles/theme';

const { colors, typography, spacing } = theme;

export const styles = {
  label: {
    fontSize: typography.fontSize.sm,
    fontWeight: typography.fontWeights.medium,
    color: colors.text.primary,
    marginBottom: spacing.xs,
  },

  input: {
    '& .MuiOutlinedInput-root': {
      borderRadius: '8px',
      backgroundColor: colors.background.light,
      
      '& fieldset': {
        borderColor: colors.border.main,
      },
      
      '&:hover fieldset': {
        borderColor: colors.border.hover,
      },
      
      '&.Mui-focused fieldset': {
        borderColor: colors.primary.main,
      },
      
      '&.Mui-error fieldset': {
        borderColor: colors.status.error,
      },
    },

    '& .MuiOutlinedInput-input': {
      padding: spacing.button.padding.md,
      fontSize: typography.fontSize.base,
      lineHeight: typography.lineHeight.normal,
      color: colors.text.primary,

      '&::placeholder': {
        color: colors.text.secondary,
        opacity: 1,
      },
    },

    '& .MuiFormHelperText-root': {
      fontSize: typography.fontSize.xs,
      marginLeft: 0,
      
      '&.Mui-error': {
        color: colors.status.error,
      },
    },

    '& .MuiInputAdornment-root': {
      color: colors.text.secondary,
      
      '& .MuiSvgIcon-root': {
        fontSize: '20px',
      },
    },
  },
} satisfies Record<string, SxProps>; 