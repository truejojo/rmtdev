export type SearchFormProps = {
  searchText: string;
  setSearchText: (text: string) => void;
};

export type JobItemProps = {
  badgeLetters: string;
  company: string;
  daysAgo: number;
  id: number;
  relevanceScore: number;
  title: string;
};

export type JobListItemProps = {
  jobItem: JobItemProps;
  isActive: boolean;
};

export type SearchResultsProps = {
  searchResults: JobItemProps[];
  isLoading: boolean;
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
