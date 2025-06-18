export type SearchFormProps = {
  searchText: string;
  setSearchText: (text: string) => void;
};

export type JobListItemProps = {
  jobItem: JobItemProps;
  isActive: boolean;
};

export type SearchResultsProps = {
  searchResults: JobItemProps[];
  isLoading: boolean;
};

export type JobItemProps = {
  badgeLetters: string;
  company: string;
  daysAgo: number;
  id: number;
  relevanceScore: number;
  title: string;
};

export type JobItemContentProps = JobItemProps & {
  companyURL: string;
  coverImgURL: string;
  description: string;
  duration: string;
  location: string;
  qualifications: string[];
  reviews: string[];
  salary: string;
};

export type SortingControlsProps = {
  onClick: (sortType: SortTypeProps) => void;
  sortType: SortTypeProps;
};

export type SortTypeProps = 'relevant' | 'recent';

export type PaginationDirectionProps = 'previous' | 'next';
