import { ProductCard } from "../../design/organisms/ProductCard/ProductCard";
import { useAppSelector } from "../../store/hooks";

export const ComparePage = () => {
  const compareProducts = useAppSelector(state => state.compareProducts)
  return (
    <>
    {compareProducts.map(product => {
      return (
        <ProductCard product={product} key={product.id}/>
      )
    })}
    </>
  );
};
