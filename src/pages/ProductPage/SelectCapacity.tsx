import { P } from '../../design/atoms/Typography/P/P';
import { P_Small } from '../../design/atoms/Typography/P_Small/P_Small';
import cn from 'classnames';
import { ShortProduct } from '../../types/ShortProduct';
import { useHandleOptionChange } from '../../utils/hooks/useHandleOptionChange';

interface Props {
  capacityAvailable: string[];
  current: string;
  category: string;
  tabId: string;
  currentProduct: ShortProduct;
}

export const SelectCapacity: React.FC<Props> = ({
  capacityAvailable,
  current,
  category,
  tabId,
  currentProduct,
}) => {
  const { handleOptionChange } = useHandleOptionChange();

  return (
    <div className="capacity">
      <P_Small className="capacity__text">
        {category === 'accessories' ? 'Select size' : 'Select Capacity'}
      </P_Small>

      <div className="capacity__options">
        {capacityAvailable.map(option => {
          return (
            <P
              key={option}
              onClick={() => handleOptionChange({
                tabId,
                category,
                current, 
                option,
                currentProduct,
              })}
              className={cn('capacity__option', {
                'capacity__option--filled': option === current,
              })}
            >
              {option}
            </P>
          );
        })}
      </div>
    </div>
  );
};
