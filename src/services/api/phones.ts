import { Phone } from '../../types/Phone';
import { client } from '../client/fetchClient';


export const getPhones = () => {
  return client.get<Phone[]>(`/phones`);
};

export const getPhoneById = (phoneId: string) => {
  return client.get<Phone>(`/phones/${phoneId}`);
};
