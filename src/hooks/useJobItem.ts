import { useQuery } from '@tanstack/react-query';
import { JobItemContentProps } from '../types';
import { fetchJobById } from '../lib/fetchJobById.ts';

export const useJobItem = (id: number) => {
  const {
    data: jobItem,
    isLoading,
    error,
  } = useQuery<JobItemContentProps, Error>({
    queryKey: ['jobItem', id],
    queryFn: () => fetchJobById(id),
    enabled: Boolean(id),
    staleTime: 1000 * 60 * 5,
    retry: 3,
  });

  return { jobItem, isLoading, error } as const;
};
