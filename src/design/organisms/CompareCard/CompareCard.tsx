import { FC } from 'react'
import { ShortProductWithDetails } from '../../../types/FullProduct'
import { Link } from 'react-router-dom';
import { H2 } from '../../atoms/Typography/H2/H2';
import { getSpecs } from '../../../utils/helpers';
import { Specs } from '../../molecules/Specs/Specs';

interface CompareCardProps {
  detailProduct: ShortProductWithDetails;
}

export const CompareCard: FC<CompareCardProps> = ({ detailProduct }) => {
  const {id, image, year, price, fullPrice, category, itemId, name, screen, capacity, ram, color} = detailProduct;
  const product = {id, image, year, price, fullPrice, category, itemId, name, screen, capacity, ram, color}
  const specs = getSpecs(detailProduct);
  return (
    <div className='compare-card'>
      <div className='compare-card__image-container'>
        <img src={`${image}`} alt={`${name}`} className='compare-card__img'/>
      </div>
      <div className='compare-card__title'>
        <Link to={`/${category}/${itemId}`} state={{ product }}><H2>{name}</H2></Link>
      </div>

      <Specs specs={specs}/>
    </div>
  );
};
