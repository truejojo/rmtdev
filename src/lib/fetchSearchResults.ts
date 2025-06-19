import toast from 'react-hot-toast';
import { API_URL } from '../constants';
import { JobItemProps } from '../types';

export const fetchSearrchResults = async (
  searchText: string,
): Promise<JobItemProps[]> => {
  const response = await fetch(`${API_URL}?search=${searchText}`);

  if (!response.ok) {
    toast.error('Failed to fetch data');
  }

  const data = await response.json();
  return data.jobItems as JobItemProps[];
};
