export const typography = {
  // Font Families
  fontFamily: 'Mont, sans-serif',

  // Font Weights
  fontWeights: {
    regular: 500,
    medium: 600,
    semiBold: 700,
    bold: 800,
  },

  // Font Sizes
  fontSize: {
    xs: '12px',    // 0.75rem
    sm: '14px',    // 0.875rem
    base: '16px',  // 1rem
    lg: '20px',    // 1.25rem
    xl: '24px',    // 1.5rem
    '2xl': '32px', // 2rem
    '3xl': '48px', // 3rem
  },

  // Line Heights
  lineHeight: {
    tight: '1.2',    // 120%
    normal: '1.5',   // 150%
    relaxed: '1.75', // 175%
  },

  // Heading Styles
  h1: {
    fontSize: '48px',
    lineHeight: '56px',
    fontWeight: 800,
  },
  h2: {
    fontSize: '32px',
    lineHeight: '41px',
    fontWeight: 800,
  },
  h3: {
    fontSize: '22px',
    lineHeight: '31px',
    fontWeight: 700,
  },
  h4: {
    fontSize: '20px',
    lineHeight: '26px',
    fontWeight: 700,
  },

  // Body Text Styles
  body1: {
    fontSize: '14px',
    lineHeight: '21px',
    fontWeight: 500,
  },
  body2: {
    fontSize: '12px',
    lineHeight: '15px',
    fontWeight: 500,
  },

  // Button Text
  button: {
    fontSize: '14px',
    lineHeight: '21px',
    fontWeight: 700,
    textTransform: 'uppercase',
  },

  // Caption Text
  caption: {
    fontSize: '12px',
    lineHeight: '15px',
    fontWeight: 500,
  },
} as const; 