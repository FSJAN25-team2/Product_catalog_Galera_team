import { P } from '../../design/atoms/Typography/P/P';
import { P_Small } from '../../design/atoms/Typography/P_Small/P_Small';
import cn from 'classnames';

interface Props {
  capacityAvailable: string[];
  capacity: string;
  category: string;
}

export const SelectCapacity: React.FC<Props> = ({ capacityAvailable, capacity, category }) => {
  return (
    <div className='capacity'>
      <P_Small className="capacity__text">
        {category === 'accessories' ? 'Select size' : 'Select Capacity'}
      </P_Small>

      <div className="capacity__options">
        {capacityAvailable.map(option => {
          return (
            <P 
              key={option}
              className={
                cn('capacity__option', 
                {'capacity__option--filled': option === capacity})
            }>
                {option}
            </P>
          )
        })}
      </div>
    </div>
  );
};
