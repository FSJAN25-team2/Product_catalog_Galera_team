import { CompareCard } from "../../design/organisms/CompareCard/CompareCard";
import { useAppSelector } from "../../store/hooks";

export const ComparePage = () => {
  const compareProducts = useAppSelector(state => state.compareProducts)
  return (
    <>
    {compareProducts.map(product => {
      return (
        <CompareCard detailProduct={product} key={product.id}/>
      )
    })}
    </>
  );
};
