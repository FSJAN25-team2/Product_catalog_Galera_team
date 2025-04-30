import { ButtonBack } from '../../design/atoms/ButtonBack/ButtonBack';
import { ComparisonTable } from '../../design/organisms/CompareTable/CompareTable';
import { useAppSelector } from '../../store/hooks';

export const ComparePage = () => {
  const compareProducts = useAppSelector(state => state.compareProducts);
  const comparePhones = compareProducts.filter(
    cProduct => cProduct.category === 'phones',
  );
  const compareTablets = compareProducts.filter(
    cProduct => cProduct.category === 'tablets',
  );
  const compareAccessories = compareProducts.filter(
    cProduct => cProduct.category === 'accessories',
  );

  if (!compareProducts || compareProducts.length === 0) {
    return (
      <>
        <ButtonBack className='mb-24'/>
        <div className="comparison-empty">No items to compare</div>
      </>
    );
  }

  return (
    <>
      <ButtonBack className='mb-24'/>
      {!!comparePhones.length && (
        <ComparisonTable compareProducts={comparePhones} />
      )}
      {!!compareTablets.length && (
        <ComparisonTable compareProducts={compareTablets} />
      )}
      {!!compareAccessories.length && (
        <ComparisonTable compareProducts={compareAccessories} />
      )}
    </>
  );
};
