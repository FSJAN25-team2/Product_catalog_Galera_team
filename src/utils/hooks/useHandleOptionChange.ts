import { useLocation, useNavigate } from 'react-router-dom';
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
  const location = useLocation();

  const handleOptionChange = ({
    tabId,
    category,
    option,
    current,
    currentProduct,
  }: Props) => {
    const newTabId = tabId.replace(current.toLowerCase(), option.toLowerCase());
    const updatedProduct = location.state.product;

    console.log(currentProduct);
    console.log(updatedProduct);

    navigate(`/${category}/${newTabId}`, {
      state: { product: updatedProduct },
    });
  };

  return { handleOptionChange };
};
