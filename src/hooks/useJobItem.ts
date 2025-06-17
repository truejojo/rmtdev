import { useQuery } from '@tanstack/react-query';
import { API_URL } from '../constants/url';
import { JobItemContentProps } from '../types';
import toast from 'react-hot-toast';

const fetchJobById = async (id: number): Promise<JobItemContentProps> => {
  const response = await fetch(`${API_URL}/${id}`);

  if (!response.ok) {
    toast.error('Failed to fetch job details');
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
