import { useQuery } from '@tanstack/react-query';
import { useDebounce } from './useDebounce.ts';
import { API_URL } from '../constants/url.ts';
import type { JobItemProps } from '../types/index.ts';

const fetchSearrchResults = async (
  searchText: string,
): Promise<JobItemProps[]> => {
  const response = await fetch(`${API_URL}?search=${searchText}`);
  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }
  const data = await response.json();
  return data.jobItems as JobItemProps[];
};

export const useSearchResults = (searchText: string) => {
  const debouncedSearchText = useDebounce(searchText, 200);

  const {
    data: searchResults,
    isLoading,
    error,
  } = useQuery<JobItemProps[], Error>({
    queryKey: ['searchResults', debouncedSearchText],
    queryFn: () => fetchSearrchResults(debouncedSearchText),
    enabled: Boolean(debouncedSearchText),
    staleTime: 1000 * 60 * 5,
    retry: 3,
  });

  return { searchResults, isLoading, error } as const;
};
