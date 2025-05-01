import React from 'react';
import { P_Small } from '../../../design/atoms/Typography/P_Small/P_Small';
import { FilterType } from '../../../types/FilterType';

type Props = {
  sortBy: string;
  itemsPerPage: number;
  onSortChange: (value: string) => void;
  onItemsPerPageChange: (value: number) => void;
  availableFilters: FilterType | null;
  onResetFilters: () => void;
  onApplyFilters: () => void;
  selectedColor: string;
  selectedRam: string;
  selectedCapacity: string;
  tempColor: string;
  tempRam: string;
  tempCapacity: string;
  setTempColor: (val: string) => void;
  setTempRam: (val: string) => void;
  setTempCapacity: (val: string) => void;
};

export const Filters: React.FC<Props> = ({
  sortBy,
  itemsPerPage,
  onSortChange,
  onItemsPerPageChange,
  availableFilters,
  onResetFilters,
  onApplyFilters,
  selectedColor,
  selectedRam,
  selectedCapacity,
  tempColor,
  tempRam,
  tempCapacity,
  setTempColor,
  setTempRam,
  setTempCapacity,
}) => {
  const hasTempChanges =
    tempColor !== selectedColor ||
    tempRam !== selectedRam ||
    tempCapacity !== selectedCapacity;

  const hasAnyFilter =
    selectedColor !== '' || selectedRam !== '' || selectedCapacity !== '';

  const renderFilterSelect = (
    label: string,
    id: string,
    value: string,
    options: string[],
    onChange: (val: string) => void,
  ) => (
    <div className="products-catalog__filter">
      <label htmlFor={id}>
        <P_Small>{label}</P_Small>
      </label>
      <select
        id={id}
        className="products-catalog__select"
        value={value}
        onChange={e => onChange(e.target.value)}
      >
        <option value="">All</option>
        {options.map(opt => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );

  return (
    <div className="products-catalog__filters">
      {renderFilterSelect(
        'Sort by',
        'sort',
        sortBy,
        ['newest', 'cheapest', 'mostExpensive'],
        onSortChange,
      )}
      {renderFilterSelect(
        'Items on page',
        'itemsPerPage',
        String(itemsPerPage),
        ['4', '8', '16', '32'],
        v => onItemsPerPageChange(Number(v)),
      )}

      {availableFilters && (
        <>
          {renderFilterSelect(
            'Color',
            'color',
            tempColor,
            availableFilters.allColors,
            setTempColor,
          )}
          {renderFilterSelect(
            'RAM',
            'ram',
            tempRam,
            availableFilters.allRam,
            setTempRam,
          )}
          {renderFilterSelect(
            'Capacity',
            'capacity',
            tempCapacity,
            availableFilters.allCapacity,
            setTempCapacity,
          )}
        </>
      )}

      {hasAnyFilter && (
        <div className="products-catalog__filter">
          <label>
            <P_Small>Reset Filters</P_Small>
          </label>
          <button className="products-catalog__button" onClick={onResetFilters}>
            RESET
          </button>
        </div>
      )}

      {hasTempChanges && (
        <div className="products-catalog__filter">
          <label>
            <P_Small>Apply Filters</P_Small>
          </label>
          <button className="products-catalog__button" onClick={onApplyFilters}>
            APPLY
          </button>
        </div>
      )}
    </div>
  );
};
