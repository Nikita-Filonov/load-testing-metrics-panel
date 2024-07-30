export interface PaginationQuery extends Record<string, string | number> {
  limit: number;
  offset: number;
}

export interface PaginationResponse<T> {
  items: T[];
  total: number;
  limit: number;
  offset: number;
}
