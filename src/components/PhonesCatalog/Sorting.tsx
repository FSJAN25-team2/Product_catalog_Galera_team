import React from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';

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
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const hasFilters = () => {
    return (
      searchParams.get('sort') ||
      searchParams.get('itemsPerPage') ||
      (searchParams.get('page') && searchParams.get('page') !== '1')
    );
  };

  const resetFilters = () => {
    navigate('/phones');
  };

  return (
    <div className="phones-catalog__filters">
      <div className="phones-catalog__filter">
        <label htmlFor="sort">Sort by</label>
        <select
          id="sort"
          value={sortBy}
          onChange={e => onSortChange(e.target.value)}
        >
          <option value="newest">Newest</option>
          <option value="cheapest">Cheapest</option>
          <option value="mostExpensive">Most Expensive</option>
        </select>
      </div>

      <div className="phones-catalog__filter">
        <label htmlFor="itemsOnPage">Items on page</label>
        <select
          id="itemsOnPage"
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
        <div>
          <label>Reset Filters</label>
          <button className="phones-catalog__reset" onClick={resetFilters}>
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
};
