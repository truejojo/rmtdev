import { useQueries } from '@tanstack/react-query';
import { JobItemProps } from '../types';
import { fetchJobById } from '../lib/fetchJobById';

export const useJobItems = (ids: number[]) => {
  const results = useQueries({
    queries: ids.map((id) => ({
      queryKey: ['jobItem', id],
      queryFn: () => fetchJobById(id),
      staleTime: 1000 * 60 * 5,
      retry: 3,
    })),
  });

  const jobItmes = results
    .map((result) => result.data)
    .filter(Boolean) as JobItemProps[];
  const isLoading = results.some((result) => result.isLoading);

  return { jobItmes, isLoading } as const;
};
