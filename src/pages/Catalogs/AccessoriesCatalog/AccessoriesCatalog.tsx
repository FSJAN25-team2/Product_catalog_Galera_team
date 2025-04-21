import { getAccessories } from "../../../services/api/phones";
import { ProductsCatalog } from "../MainCatalog/ProductsCatalog";

export const AccessoriesCatalog = () => {
  return (
    <ProductsCatalog
      title="Accessories"
      category="Accessories"
      fetchProducts={getAccessories}
    />
  );
};
