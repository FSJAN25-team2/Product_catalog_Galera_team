export const ROUTES = {
  HOME: '/',
  PHONES: '/phones',
  TABLETS: '/tablets',
  ACCESSORIES: '/accessories',
  FAVOURITES: '/favourites',
  CART: '/cart',
} as const;

export const NAV_LINKS = [
  { path: ROUTES.PHONES, label: 'Phones' },
  { path: ROUTES.TABLETS, label: 'Tablets' },
  { path: ROUTES.ACCESSORIES, label: 'Accessories' },
] as const;

export type Routes = typeof ROUTES;
export type RouteKeys = keyof Routes; 