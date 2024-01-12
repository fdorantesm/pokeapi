export interface PaginatedResult<T> {
  docs: T[];
  total: number;
  limit: number;
  page?: number | undefined;
  pages?: number | undefined;
  offset?: number | undefined;
}
