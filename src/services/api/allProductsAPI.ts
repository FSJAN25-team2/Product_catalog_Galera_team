import { FullProduct } from '../../types/FullProduct';
import { ProductRequestQuery } from '../../types/ProductRequestQuery';
import { client } from '../client/fetchClient';
import { ProductsResponse } from '../../types/ProductsResponse';
import { ShortProduct } from '../../types/ShortProduct';

export const getProducts = ({
  limit,
  page,
  category,
  sortBy,
}: ProductRequestQuery) => {
  return client.get<ProductsResponse>(
    `/products?limit=${limit}&page=${page}&category=${category}&sortBy=${sortBy}`,
  );
};

export const getHotPricedProducts = (limit = 8) => {
  return client.get<ShortProduct[]>(`/products/hot-prices?limit=${limit}`);
};

export const getPhoneById = (phoneId: string) => {
  return client.get<FullProduct>(`/phones/${phoneId}`);
};

export const getTabletById = (tabletId: string) => {
  return client.get<FullProduct>(`/tablets/${tabletId}`);
};

export const getAccessoryById = (accessoryId: string) => {
  return client.get<FullProduct>(`/accessories/${accessoryId}`);
};
