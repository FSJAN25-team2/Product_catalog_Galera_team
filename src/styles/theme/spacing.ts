export const spacing = {
  // Base spacing unit (8px)
  unit: 8,

  // Spacing scale
  xs: '4px',     // 0.5x
  sm: '8px',     // 1x
  md: '16px',    // 2x
  lg: '24px',    // 3x
  xl: '32px',    // 4x
  '2xl': '40px', // 5x
  '3xl': '48px', // 6x
  '4xl': '64px', // 8x
  '5xl': '80px', // 10x

  // Component specific spacing
  section: {
    padding: '80px',
    marginBottom: '48px',
  },

  container: {
    padding: {
      xs: '16px',
      sm: '24px',
      md: '32px',
    },
  },

  card: {
    padding: '24px',
    gap: '16px',
  },

  button: {
    padding: {
      sm: '8px 16px',
      md: '12px 24px',
      lg: '16px 32px',
    },
  },
} as const; 