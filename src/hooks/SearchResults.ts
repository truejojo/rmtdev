import { useState, useEffect } from 'react';
import type { JobItemProps } from '../types/index.ts';

export const useSearchResults = (searchText: string) => {
  const [searchResults, setSearchResults] = useState<JobItemProps[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const searchRsultsLimited = searchResults.slice(0, 7);

  useEffect(() => {
    if (!searchText) return;

    const fetchRequest = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `https://bytegrad.com/course-assets/projects/rmtdev/api/data?search=${searchText}`,
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
  }, [searchText]);

  return [searchRsultsLimited, isLoading] as const;
};
