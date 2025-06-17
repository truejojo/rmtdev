import { useState, useEffect } from 'react';
import type { JobItemProps } from '../types/index.ts';
import { useDebounce } from './useDebounce.ts';
import { API_URL } from '../constants/url.ts';

export const useSearchResults = (searchText: string) => {
  const debouncedSearchText = useDebounce(searchText, 200);
  const [searchResults, setSearchResults] = useState<JobItemProps[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!debouncedSearchText) return;

    const fetchRequest = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `${API_URL}?search=${debouncedSearchText}`,
        );

        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const data = await response.json();
        setSearchResults(data.jobItems);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRequest();
  }, [debouncedSearchText]);

  return { searchResults, isLoading } as const;
};
