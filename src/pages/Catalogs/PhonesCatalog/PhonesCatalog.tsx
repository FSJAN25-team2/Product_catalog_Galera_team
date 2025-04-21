import { getPhones } from "../../../services/api/phones";
import { ProductsCatalog } from "../MainCatalog/ProductsCatalog";

export const PhonesCatalog = () => {
  return (
    <ProductsCatalog
      title="Mobile Phones"
      category="phones"
      fetchProducts={getPhones}
    />
  );
};
