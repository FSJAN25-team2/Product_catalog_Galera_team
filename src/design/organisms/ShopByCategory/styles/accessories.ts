import { Category } from '../types';
import { defaultImageStyles } from './defaultStyles';

export const accessories: Category = {
  id: 'accessories',
  title: 'Accessories',
  image: '/img/category-accessories.png',
  link: '/accessories',
  models: 100,
  styles: {
    image: {
      ...defaultImageStyles,
      width: '200%',
      height: '200%',
      right: '-110%',
      bottom: '-70%',
    },
    card: {
      backgroundColor: '#b64c70',
      opacity: 0.9,
    },
  },
}; 