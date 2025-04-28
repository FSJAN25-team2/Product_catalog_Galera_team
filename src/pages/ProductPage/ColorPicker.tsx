import { P_Small } from '../../design/atoms/Typography/P_Small/P_Small';
import cn from 'classnames';
import { ShortProduct } from '../../types/ShortProduct';
import { useHandleOptionChange } from '../../utils/hooks/useHandleOptionChange';

interface Props {
  colorsAvailable: string[];
  current: string;
  category: string;
  id: string;
  tabId: string;
  currentProduct: ShortProduct;
}

export const ColorPicker: React.FC<Props> = ({
  colorsAvailable,
  current,
  category,
  id,
  tabId,
  currentProduct,
}) => {
  const { handleOptionChange } = useHandleOptionChange();

  return (
    <div className="colorpicker">
      <div className="colorpicker__text-container">
        <P_Small className="colorpicker__available">Available colors</P_Small>
        <P_Small className="colorpicker__item-id">ID: {id}</P_Small>
      </div>

      <div className="colorpicker__color-container">
        {colorsAvailable.map((option, index) => {
          return (
            <div
              key={option + index}
              className={cn(
                `colorpicker__color colorpicker__color--${option}`,
                { 'colorpicker__color--active': option === current },
              )}
              onClick={() => handleOptionChange({
                tabId,
                category,
                current, 
                option,
                currentProduct,
              })}
            ></div>
          );
        })}
      </div>
    </div>
  );
};
