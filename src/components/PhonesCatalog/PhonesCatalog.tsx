import './PhonesCatalog.scss';
import React, { useEffect, useState } from 'react';
import { Phone } from '../../types/Phone';
import { ProductCard } from '../ProductCard/ProductCard';
import { getPhones } from '../../api/phones';
import { useSearchParams } from 'react-router-dom';

import { Filters } from './sorting';
import { Pagination } from './Pagination';

import {
  sortPhones,
  getTotalPages,
  getVisiblePhones,
  getPageNumbers,
} from './Functions';

export const PhonesCatalog: React.FC = () => {
  const [phones, setPhones] = useState<Phone[]>([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const sortBy = searchParams.get('sort') || 'newest';
  const itemsPerPage = +(searchParams.get('itemsPerPage') || 16);
  const currentPage = +(searchParams.get('page') || 1);

  useEffect(() => {
    getPhones()
      .then(data => setPhones(data))
      .catch(error => console.error(error));
  }, []);

  const handleSortChange = (value: string) => {
    const params = new URLSearchParams(searchParams);
    params.set('sort', value);
    params.set('page', '1');
    setSearchParams(params);
  };

  const handleItemsPerPageChange = (value: number) => {
    const params = new URLSearchParams(searchParams);
    params.set('itemsPerPage', value.toString());
    params.set('page', '1');
    setSearchParams(params);
  };

  const handlePageChange = (page: number) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', page.toString());
    setSearchParams(params);
  };

  const sortedPhones = sortPhones(phones, sortBy);
  const totalPages = getTotalPages(sortedPhones.length, itemsPerPage);
  const visiblePhones = getVisiblePhones(
    sortedPhones,
    currentPage,
    itemsPerPage,
  );
  const pageNumbers = getPageNumbers(currentPage, totalPages);

  return (
    <div className="container">
      <div className="phones-catalog">
        <h1 className="phones-catalog__title">Mobile phones</h1>
        <p className="phones-catalog__count">{phones.length} models</p>

        <Filters
          sortBy={sortBy}
          itemsPerPage={itemsPerPage}
          onSortChange={handleSortChange}
          onItemsPerPageChange={handleItemsPerPageChange}
        />

        <div className="phones-catalog__list">
          {visiblePhones.map(phone => (
            <ProductCard
              key={phone.id}
              product={{
                name: phone.name,
                fullPrice: phone.priceRegular,
                price: phone.priceDiscount,
                screen: phone.screen,
                capacity: phone.capacity,
                ram: phone.ram,
                image: phone.images[0],
                itemId: phone.id,
                category: 'phones',
              }}
            />
          ))}
        </div>

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
          pageNumbers={pageNumbers}
        />
      </div>
    </div>
  );
};
