export const COLORS = {
  PRIMARY: '#313237',
  SECONDARY: '#89939A',
  BACKGROUND: '#FAFBFC',
  WHITE: '#FFFFFF',
} as const;

export const TYPOGRAPHY = {
  H1: {
    FONT_SIZE: '48px',
    LINE_HEIGHT: '56px',
    FONT_WEIGHT: 800,
  },
  H2: {
    FONT_SIZE: '32px',
    LINE_HEIGHT: '41px',
    FONT_WEIGHT: 800,
  },
  H3: {
    FONT_SIZE: '22px',
    LINE_HEIGHT: '31px',
    FONT_WEIGHT: 700,
  },
  BODY1: {
    FONT_SIZE: '14px',
    LINE_HEIGHT: '21px',
    FONT_WEIGHT: 500,
  },
  BODY2: {
    FONT_SIZE: '12px',
    LINE_HEIGHT: '15px',
    FONT_WEIGHT: 500,
  },
} as const;

export const BREAKPOINTS = {
  xs: 0,
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1920,
} as const;

export const SPACING = {
  SMALL: '8px',
  MEDIUM: '16px',
  LARGE: '24px',
  XLARGE: '32px',
  SECTION: '80px',
} as const; 