import toast from 'react-hot-toast';
import { API_URL } from '../constants';
import { JobItemContentProps } from '../types';

export const fetchJobById = async (
  id: number,
): Promise<JobItemContentProps> => {
  const response = await fetch(`${API_URL}/${id}`);

  if (!response.ok) {
    toast.error('Failed to fetch job details');
  }

  const data = await response.json();
  return data.jobItem as JobItemContentProps;
};
