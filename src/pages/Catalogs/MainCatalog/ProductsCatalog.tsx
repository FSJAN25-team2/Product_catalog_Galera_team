import { ProductCard } from '../../../design/organisms/ProductCard/ProductCard';
import React, { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Filters } from './Sorting';
import { Pagination } from './Pagination';
import { ShortProduct } from '../../../types/ShortProduct';
import { Category } from '../../../types/Category';
import {
  sortProducts,
  getTotalPages,
  getVisibleProducts,
  getPageNumbers,
} from './Functions';
import { getProducts } from '../../../services/api/allProductsAPI';
import { Sorting } from '../../../types/Sorting';

type Props = {
  title: string;
  category: Category;
};

export const ProductsCatalog: React.FC<Props> = ({ title, category }) => {
  const [products, setProducts] = useState<ShortProduct[]>([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const sortBy = searchParams.get('sort') || 'newest';
  const itemsPerPage = +(searchParams.get('itemsPerPage') || 16);
  const currentPage = +(searchParams.get('page') || 1);

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

  useEffect(() => {
    getProducts({
      limit: itemsPerPage,
      page: currentPage,
      category,
      sortBy: sortBy as Sorting,
    })
      .then(data => {
        console.log(data);
        setProducts(data);
      })
      .catch(error => console.error(error));
  }, [category, currentPage, itemsPerPage, sortBy]);

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

      {visibleProducts.map(product => (
        <ProductCard
          key={product.id}
          product={{
            name: product.name,
            fullPrice: product.fullPrice,
            price: product.price,
            screen: product.screen,
            capacity: product.capacity,
            ram: product.ram,
            image: product.image,
            itemId: product.itemId,
            category: category,
            id: product.id,
            year: product.year,
            color: product.color,
          }}
        />
      ))}

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
        pageNumbers={pageNumbers}
      />
    </div>
  );
};
