import { useContext } from 'react';
import { JobIdContext } from '../context/JobIdProvider';

export const useJobIdContext = () => {
  const constext = useContext(JobIdContext);

  if (!constext) {
    throw new Error('JobIdContext is not available');
  }

  return constext;
};
