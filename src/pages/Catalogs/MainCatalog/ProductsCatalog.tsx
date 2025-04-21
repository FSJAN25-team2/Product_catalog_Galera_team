import { ProductCard } from '../../../design/organisms/ProductCard/ProductCard';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Filters } from './Sorting';
import { Pagination } from './Pagination';
import { Product } from '../../../types/Product';

import {
  sortProducts,
  getTotalPages,
  getVisibleProducts,
  getPageNumbers,
} from './Functions';

type Props = {
  title: string;
  category: string;
  fetchProducts: () => Promise<Product[]>;
};

export const ProductsCatalog: React.FC<Props> = ({
  title,
  category,
  fetchProducts,
}) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const sortBy = searchParams.get('sort') || 'newest';
  const itemsPerPage = +(searchParams.get('itemsPerPage') || 16);
  const currentPage = +(searchParams.get('page') || 1);

  useEffect(() => {
    fetchProducts()
      .then(data => setProducts(data))
      .catch(error => console.error(error));
  }, [fetchProducts]);

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

  const sortedProducts = sortProducts(products, sortBy);
  const totalPages = getTotalPages(sortedProducts.length, itemsPerPage);
  const visibleProducts = getVisibleProducts(
    sortedProducts,
    currentPage,
    itemsPerPage,
  );
  const pageNumbers = getPageNumbers(currentPage, totalPages);

  return (
    <div className="container">
      <div className="products-catalog">
        <h1 className="products-catalog__title">{title}</h1>
        <p className="products-catalog__count">{products.length} models</p>

        <Filters
          sortBy={sortBy}
          itemsPerPage={itemsPerPage}
          onSortChange={handleSortChange}
          onItemsPerPageChange={handleItemsPerPageChange}
        />

        <div className="products-catalog__list">
          {visibleProducts.map(product => (
            <ProductCard
              key={product.id}
              product={{
                name: product.name,
                fullPrice: product.priceRegular,
                price: product.priceDiscount,
                screen: product.screen,
                capacity: product.capacity,
                ram: product.ram,
                image: product.images[0],
                itemId: product.id,
                category: category,
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
