import { useQuery } from '@tanstack/react-query';
import { useDebounce } from './useDebounce.ts';
import type { JobItemProps } from '../types/index.ts';
import { fetchSearrchResults } from '../lib/fetchSearchResults.ts';

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
