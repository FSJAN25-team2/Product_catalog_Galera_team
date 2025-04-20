export const API_BASE_URL = 'https://api.example.com';

export const API_ENDPOINTS = {
  PRODUCTS: '/products',
  CATEGORIES: '/categories',
  CART: '/cart',
  FAVOURITES: '/favourites',
} as const;

export const API_METHODS = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE',
} as const;

export const API_HEADERS = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
} as const; 