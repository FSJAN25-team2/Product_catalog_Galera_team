import { BaseEntity } from './common';

export interface Product extends BaseEntity {
  name: string;
  category: ProductCategory;
  price: number;
  fullPrice: number;
  screen: string;
  capacity: string;
  color: string;
  ram: string;
  year: number;
  image: string;
}

export type ProductCategory = 'phones' | 'tablets' | 'accessories';

export interface ProductDetails extends Product {
  description: string;
  specs: {
    [key: string]: string;
  };
  images: string[];
}

export interface CartItem extends BaseEntity {
  product: Product;
  quantity: number;
}

export interface FavouriteItem extends BaseEntity {
  product: Product;
} 