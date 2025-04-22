import { ProductCard } from '../../../design/organisms/ProductCard/ProductCard';
import React, { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Filters } from './Sorting';
import { Pagination } from './Pagination';
import { Product } from '../../../types/Product';
import { Category } from '../../../types/Category';
import {
  sortProducts,
  getTotalPages,
  getVisibleProducts,
  getPageNumbers,
} from './Functions';

type Props = {
  title: string;
  category: Category;
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

  console.log(products[0]);

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

  const categoryNames = {
    [Category.Phones]: 'Phones',
    [Category.Tablets]: 'Tablets',
    [Category.Accessories]: 'Accessories',
  };

  const formattedCategory = categoryNames[category];

  return (
    <div className="products-catalog">
      <div className="products-catalog__breadcrumbs">
        <Link to="/" className="products-catalog__breadcrumbs-link">
          Home
        </Link>
        <span className="products-catalog__breadcrumbs-separator">/</span>
        <span className="products-catalog__breadcrumbs-current">
          {formattedCategory}
        </span>
      </div>

      <h1 className="products-catalog__title">{title}</h1>
      <p className="products-catalog__count">{products.length} models</p>

      <Filters
        sortBy={sortBy}
        itemsPerPage={itemsPerPage}
        onSortChange={handleSortChange}
        onItemsPerPageChange={handleItemsPerPageChange}
      />

      {/* <div className="products-catalog__list"> */}
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
      {/* </div> */}

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
        pageNumbers={pageNumbers}
      />
    </div>
  );
};
