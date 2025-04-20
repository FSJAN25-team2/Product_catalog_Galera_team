export interface Product {
  name: string;
  fullPrice: number;
  price: number;
  screen: string;
  capacity: string;
  ram: string;
  image: string;
  itemId: string;
  category: 'phones' | 'tablets' | 'accessories';
} 