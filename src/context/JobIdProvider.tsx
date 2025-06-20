import { createContext } from 'react';
import { useJobId } from '../hooks/useJobId';

type JobIdContextType = {
  jobId: number;
};

export const JobIdContext = createContext<JobIdContextType | null>(null);

const BookmarkProvider = ({ children }: { children: React.ReactNode }) => {
  const jobId = useJobId();

  return (
    <JobIdContext.Provider value={{ jobId }}>{children}</JobIdContext.Provider>
  );
};

export default BookmarkProvider;
