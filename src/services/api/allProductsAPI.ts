import { FullProduct } from '../../types/FullProduct';
import { ShortProduct } from '../../types/ShortProduct';
import { ProductRequestQuery } from '../../types/ProductRequestQuery';
import { client } from '../client/fetchClient';

export const getProducts = ({
  limit,
  page,
  category,
  sortBy,
}: ProductRequestQuery) => {
  return client.get<ShortProduct[]>(
    `/products?limit=${limit}&page=${page}&category=${category}&sortBy=${sortBy}`,
  );
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
