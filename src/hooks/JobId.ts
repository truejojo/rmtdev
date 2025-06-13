import { useState, useEffect } from 'react';

export const useJobId = () => {
  const [jobId, setJobId] = useState<number>();

  useEffect(() => {
    window.addEventListener('hashchange', () => {
      const hash = +window.location.hash.slice(1);
      setJobId(hash);
    });
  }, [jobId]);

  return jobId as number;
};
