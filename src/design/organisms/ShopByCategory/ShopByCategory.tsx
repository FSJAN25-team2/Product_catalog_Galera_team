import { FC } from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import { H2 } from '../../atoms/Typography/H2/H2';
import { H3 } from '../../atoms/Typography/H3/H3';
import { P_Small } from '../../atoms/Typography/P_Small/P_Small';
import './ShopByCategory.scss';

interface Category {
  id: string;
  title: string;
  image: string;
  link: string;
  models: number;
}

interface Props {
  className?: string;
}

const categories: Category[] = [
  {
    id: 'phones',
    title: 'Mobile phones',
    image: '/img/category-phones.png',
    link: '/phones',
    models: 95,
  },
  {
    id: 'tablets',
    title: 'Tablets',
    image: '/img/category-tablets.png',
    link: '/tablets',
    models: 24,
  },
  {
    id: 'accessories',
    title: 'Accessories',
    image: '/img/category-accessories.png',
    link: '/accessories',
    models: 100,
  },
];

export const ShopByCategory: FC<Props> = ({ className }) => {
  return (
    <section className={cn('categories', className)}>
      <H2 className="categories__title">
        Shop by category
      </H2>

      <div className="categories__grid">
        {categories.map(category => (
          <div key={category.id} className="categories__item">
            <Link
              to={category.link}
              className="categories__card"
            >
              <img
                src={category.image}
                alt={category.title}
                className="categories__image"
              />
            </Link>
            <div className="categories__content">
              <H3 className="categories__card-title">
                {category.title}
              </H3>
              <P_Small className="categories__models">
                {category.models} models
              </P_Small>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}; 