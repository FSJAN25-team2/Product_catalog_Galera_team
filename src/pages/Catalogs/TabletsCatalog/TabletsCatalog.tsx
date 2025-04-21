import { getTablets } from '../../../services/api/phones';
import { ProductsCatalog } from '../MainCatalog/ProductsCatalog';

export const TabletsCatalog = () => {
  return (
    <ProductsCatalog
      title="Tablets"
      category="tablets"
      fetchProducts={getTablets}
    />
  );
};
