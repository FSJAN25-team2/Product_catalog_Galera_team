export const breakpoints = {
  values: {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1200,
    xl: 1536,
  },
  up: (key: keyof typeof breakpoints.values) => 
    `@media (min-width: ${breakpoints.values[key]}px)`,
  down: (key: keyof typeof breakpoints.values) => 
    `@media (max-width: ${breakpoints.values[key] - 0.05}px)`,
  between: (start: keyof typeof breakpoints.values, end: keyof typeof breakpoints.values) => 
    `@media (min-width: ${breakpoints.values[start]}px) and (max-width: ${breakpoints.values[end] - 0.05}px)`,
} as const; 