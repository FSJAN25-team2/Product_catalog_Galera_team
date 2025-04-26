import { P_Small } from '../../design/atoms/Typography/P_Small/P_Small';
import cn from 'classnames';

interface Props {
  colorsAvailable: string[];
  color: string;
  id: string;
}

export const ColorPicker: React.FC<Props> = ({ colorsAvailable, color, id }) => {
  return (
    <div className="colorpicker">
      <div className="colorpicker__text-container">
        <P_Small className='colorpicker__available'>Available colors</P_Small>
        <P_Small className="colorpicker__item-id">ID: {id}</P_Small>
      </div>

      <div className="colorpicker__color-container">
        {colorsAvailable.map((pickColor, index) => {
          return (
            <div 
              key={pickColor + index}
              className={
                cn(`colorpicker__color colorpicker__color--${pickColor}`,
                  {'colorpicker__color--active': pickColor === color})
              }
            ></div>
          )
        })}
      </div>
    </div>
  );
};
