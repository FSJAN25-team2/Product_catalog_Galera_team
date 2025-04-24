import { ShortProduct } from "./ShortProduct";

export type ProductsResponse = {
  totalCount: number;
  products: ShortProduct[];
};