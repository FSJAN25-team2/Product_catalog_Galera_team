import { ShortProduct } from "./ShortProduct";

export interface FullProduct {
  id: string;
  namespaceId: string;
  name: string;
  capacityAvailable: string[];
  capacity: string;
  priceRegular: number;
  priceDiscount: number;
  colorsAvailable: string[];
  color: string;
  images: string[];
  description: {
    title: string;
    text: string[];
  }[];
  screen: string;
  resolution: string;
  processor: string;
  ram: string;
  camera: string;
  zoom: string;
  cell: string[];
}

export interface ShortProductWithDetails extends ShortProduct {
  resolution: string;
  processor: string;
  camera: string;
  zoom: string;
  cell: string[];
}
