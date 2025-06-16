import { useState, useEffect } from 'react';
import type { JobItemProps } from '../types/index.ts';
import { useDebounce } from './useDebounce.ts';

export const useSearchResults = (searchText: string) => {
  const debouncedSearchText = useDebounce(searchText, 200);
  const [searchResults, setSearchResults] = useState<JobItemProps[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const searchResultsLimited = searchResults.slice(0, 7);
  const searchResultsCount = searchResults.length;

  useEffect(() => {
    if (!debouncedSearchText) return;

    const fetchRequest = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `https://bytegrad.com/course-assets/projects/rmtdev/api/data?search=${debouncedSearchText}`,
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

  return { searchResultsLimited, isLoading, searchResultsCount } as const;
};
