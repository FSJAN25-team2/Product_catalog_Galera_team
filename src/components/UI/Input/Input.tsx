import React from 'react';
import { 
  TextField, 
  TextFieldProps, 
  InputAdornment,
  Typography,
} from '@mui/material';
import { styles } from './styles';

export interface InputProps extends Omit<TextFieldProps, 'variant'> {
  label?: string;
  error?: boolean;
  helperText?: string;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  fullWidth?: boolean;
}

export const Input: React.FC<InputProps> = ({
  label,
  error,
  helperText,
  startIcon,
  endIcon,
  fullWidth = false,
  sx,
  ...props
}) => {
  return (
    <div style={{ width: fullWidth ? '100%' : 'auto' }}>
      {label && (
        <Typography sx={styles.label}>
          {label}
        </Typography>
      )}
      
      <TextField
        sx={{
          ...styles.input,
          width: fullWidth ? '100%' : 'auto',
          ...sx,
        }}
        error={error}
        helperText={helperText}
        InputProps={{
          startAdornment: startIcon && (
            <InputAdornment position="start">
              {startIcon}
            </InputAdornment>
          ),
          endAdornment: endIcon && (
            <InputAdornment position="end">
              {endIcon}
            </InputAdornment>
          ),
        }}
        {...props}
      />
    </div>
  );
}; 