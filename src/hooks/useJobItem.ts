import { API_URL } from '../constants/url';
import { JobItemContentProps } from '../types';
import { useQuery } from '@tanstack/react-query';

const fetchJobById = async (id: number): Promise<JobItemContentProps> => {
  const response = await fetch(`${API_URL}/${id}`);

  if (!response.ok) {
    const errorMessage = await response.json();
    throw new Error(`Error fetching job item: ${errorMessage.description}`);
  }

  const data = await response.json();
  return data.jobItem as JobItemContentProps;
};

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
