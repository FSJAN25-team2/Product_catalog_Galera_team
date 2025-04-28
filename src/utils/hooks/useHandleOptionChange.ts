import { useNavigate } from 'react-router-dom';
import { ShortProduct } from '../../types/ShortProduct';

interface Props {
  tabId: string;
  category: string;
  option: string;
  current: string;
  currentProduct: ShortProduct;
}

export const useHandleOptionChange = () => {
  const navigate = useNavigate();

  const handleOptionChange = ({
    tabId,
    category,
    option,
    current,
    currentProduct,
  }: Props) => {
    const tabIdParts = tabId
      .split('-')
      .map(part =>
        part === current.toLowerCase() ? option.toLowerCase() : part,
      );

    const newTabId = tabIdParts.join('-');

    navigate(`/${category}/${newTabId}`, {
      state: { product: currentProduct },
    });
  };

  return { handleOptionChange };
};
