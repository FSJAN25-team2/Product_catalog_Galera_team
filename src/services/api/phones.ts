import { Product } from '../../types/Product';
import { client } from '../client/fetchClient';

export const getPhones = () => {
  return client.get<Product[]>('/phones');
};

export const getPhoneById = (phoneId: string) => {
  return client.get<Product>(`/phones/${phoneId}`);
};

export const getTablets = () => {
  return client.get<Product[]>('/tablets');
};

export const getTabletById = (tabletId: string) => {
  return client.get<Product>(`/tablets/${tabletId}`);
};

export const getAccessories = () => {
  return client.get<Product[]>('/accessories');
};

export const getAccessoryById = (accessoryId: string) => {
  return client.get<Product>(`/accessories/${accessoryId}`);
};
