import { Category } from '../types';
import { defaultImageStyles } from './defaultStyles';

export const phones: Category = {
  id: 'phones',
  title: 'Mobile phones',
  image: '/img/category-phones.png',
  link: '/phones',
  models: 95,
  styles: {
    image: {
      ...defaultImageStyles,
      width: '200%',
      height: '200%',
      right: '-60%',
      bottom: '-90%',
    },
    card: {
      backgroundColor: '#fcdec4',
      opacity: 0.9,
    },
  },
}; 