import { useState, useEffect } from 'react';
import { JobItemContentProps } from '../types';

export const useJobItem = (id: number) => {
  const [jobItem, setJobItem] = useState<JobItemContentProps>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!id) return;

    const fetchJobById = async () => {
      setIsLoading(true);

      try {
        const response = await fetch(
          `https://bytegrad.com/course-assets/projects/rmtdev/api/data/${id}`,
        );
        const data = await response.json();

        setJobItem(data.jobItem);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchJobById();
  }, [id]);

  return { jobItem, isLoading } as const;
};
