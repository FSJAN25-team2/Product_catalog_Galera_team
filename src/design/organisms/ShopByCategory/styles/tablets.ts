import { Category } from '../types';
import { defaultImageStyles } from './defaultStyles';

export const tablets: Category = {
  id: 'tablets',
  title: 'Tablets',
  image: '/img/category-tablets.png',
  link: '/tablets',
  models: 24,
  styles: {
    image: {
      ...defaultImageStyles,
      width: '200%',
      height: '200%',
      right: '-75%',
      bottom: '-97%',
    },
    card: {
      backgroundColor: '#8D8D92',
      opacity: 0.9,
    },
  },
}; 