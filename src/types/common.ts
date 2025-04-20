export type ID = string;

export interface BaseEntity {
  id: ID;
  createdAt: string;
  updatedAt: string;
}

export interface ApiResponse<T> {
  data: T;
  status: number;
  message?: string;
}

export interface PaginatedResponse<T> extends ApiResponse<T> {
  total: number;
  page: number;
  perPage: number;
  totalPages: number;
}

export interface QueryParams {
  page?: number;
  perPage?: number;
  search?: string;
  sort?: string;
  order?: 'asc' | 'desc';
  [key: string]: any;
} 