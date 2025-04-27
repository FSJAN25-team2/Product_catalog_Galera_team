import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { P_Small } from '../../../design/atoms/Typography/P_Small/P_Small';

type Props = {
  sortBy: string;
  itemsPerPage: number;
  onSortChange: (value: string) => void;
  onItemsPerPageChange: (value: number) => void;
};

export const Filters: React.FC<Props> = ({
  sortBy,
  itemsPerPage,
  onSortChange,
  onItemsPerPageChange,
}) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const hasFilters = () => {
    return (
      searchParams.get('sort') ||
      searchParams.get('itemsPerPage') ||
      (searchParams.get('page') && searchParams.get('page') !== '1')
    );
  };

  const resetFilters = () => {
    setSearchParams('');
  };

  return (
    <div className="products-catalog__filters">
      <div className="products-catalog__filter">
        <label htmlFor="sort">
          <P_Small>Sort by</P_Small>
        </label>

        <select
          id="sort"
          className="products-catalog__select"
          value={sortBy}
          onChange={e => onSortChange(e.target.value)}
        >
          <option value="newest">NEWEST</option>
          <option value="cheapest">CHEAPEST</option>
          <option value="mostExpensive">MOST EXPENSIVE</option>
        </select>
      </div>

      <div className="products-catalog__filter">
        <label htmlFor="itemsOnPage">
          <P_Small>Items on page</P_Small>
        </label>

        <select
          id="itemsOnPage"
          className="products-catalog__select"
          value={itemsPerPage}
          onChange={e => onItemsPerPageChange(+e.target.value)}
        >
          <option value="4">4</option>
          <option value="8">8</option>
          <option value="16">16</option>
          <option value="32">32</option>
        </select>
      </div>

      {hasFilters() && (
        <div className="products-catalog__filter">
          <label>
            <P_Small>Reset Filters</P_Small>
          </label>
          <button className="products-catalog__reset" onClick={resetFilters}>
            RESET
          </button>
        </div>
      )}
    </div>
  );
};
