import { ProductCard } from '../../../design/organisms/ProductCard/ProductCard';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Filters } from './Sorting';
import { Pagination } from './Pagination';
import { ShortProduct } from '../../../types/ShortProduct';
import { Category } from '../../../types/Category';
import { getPageNumbers } from './Functions';
import { getProducts } from '../../../services/api/allProductsAPI';
import { Sorting } from '../../../types/Sorting';
import { Breadcrumbs } from '../../../design/atoms/Breadcrumbs/Breadcrumbs';
import { ButtonBack } from '../../../design/atoms/ButtonBack/ButtonBack';
import { H2 } from '../../../design/atoms/Typography/H2/H2';
import { P_Small } from '../../../design/atoms/Typography/P_Small/P_Small';

type Props = {
  title: string;
  category: Category;
};

export const ProductsCatalog: React.FC<Props> = ({ title, category }) => {
  const [products, setProducts] = useState<ShortProduct[]>([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [totalCount, setTotalCount] = useState(0);

  const sortBy = searchParams.get('sort') || 'newest';
  const itemsPerPage = +(searchParams.get('itemsPerPage') || 16);
  const currentPage = +(searchParams.get('page') || 1);
  const totalPages = Math.ceil(totalCount / itemsPerPage);

  const handleSortChange = (value: string) => {
    const params = new URLSearchParams(searchParams);
    if (value === Sorting.Newest) {
      params.delete('sort');
    } else {
      params.set('sort', value);
    }
    params.delete('page');
    setSearchParams(params);
  };

  const handleItemsPerPageChange = (value: number) => {
    const params = new URLSearchParams(searchParams);
    if (value === 16) {
      params.delete('itemsPerPage');
    } else {
      params.set('itemsPerPage', value.toString());
    }
    params.delete('page');
    setSearchParams(params);
  };

  const handlePageChange = (page: number) => {
    const params = new URLSearchParams(searchParams);
    if (page === 1) {
      params.delete('page');
    } else {
      params.set('page', page.toString());
    }
    setSearchParams(params);
  };

  const pageNumbers = getPageNumbers(currentPage, totalPages);

  useEffect(() => {
    getProducts({
      limit: itemsPerPage,
      page: currentPage,
      category,
      sortBy: sortBy as Sorting,
    })
      .then(({ products, totalCount }) => {
        setProducts(products);
        setTotalCount(totalCount);
      })
      .catch(error => console.error(error));
  }, [category, currentPage, itemsPerPage, sortBy]);

  return (
    <div className="products-catalog">
      <Breadcrumbs className="products-catalog__breadcrumbs" />

      <ButtonBack className='products-catalog__buttom-back'/>

      <H2 className="products-catalog__title">{title}</H2>
      <P_Small className="products-catalog__count">{totalCount} models</P_Small>

      <Filters
        sortBy={sortBy}
        itemsPerPage={itemsPerPage}
        onSortChange={handleSortChange}
        onItemsPerPageChange={handleItemsPerPageChange}
      />

      {products.map(product => (
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
