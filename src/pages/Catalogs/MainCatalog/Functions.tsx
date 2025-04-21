import { Product } from "../../../types/Product";

export const sortProducts = (phones: Product [], sortBy: string) => {
  return [...phones].sort((a, b) => {
    switch (sortBy) {
      case 'cheapest':
        return a.priceDiscount - b.priceDiscount;
      case 'mostExpensive':
        return b.priceDiscount - a.priceDiscount;
      default:
        return 0;
    }
  });
};

export const getTotalPages = (phonesLength: number, itemsPerPage: number) => {
  return Math.ceil(phonesLength / itemsPerPage);
};

export const getVisibleProducts = (
  phones: Product [],
  currentPage: number,
  itemsPerPage: number
) => {
  return phones.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
};

export const getPageNumbers = (
  currentPage: number,
  totalPages: number
): number[] => {
  let startPage = Math.max(1, currentPage - 1);
  const endPage = Math.min(totalPages, startPage + 3);

  if (endPage - startPage < 3) {
    startPage = Math.max(1, endPage - 3);
  }

  const pages = [];
  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }
  return pages;
};