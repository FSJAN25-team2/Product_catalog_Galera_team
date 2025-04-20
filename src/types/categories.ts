export interface Category {
  title: string;
  image: string;
  itemCount: string;
  link: string;
}

export const ROUTES = {
  HOME: '/',
  PHONES: '/phones',
  TABLETS: '/tablets',
  ACCESSORIES: '/accessories',
  FAVOURITES: '/favourites',
  CART: '/cart',
} as const; 