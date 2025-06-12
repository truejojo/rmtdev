export type SearchFormProps = {
  searchText: string;
  setSearchText: (text: string) => void;
};

type JobItemProps = {
  badgeLetters: string;
  company: string;
  daysAgo: number;
  id: number;
  relevanceScore: number;
  title: string;
};

export type JobListItemProps = {
  jobItem: JobItemProps;
};

export type SearchResultsProps = {
  searchResults: JobItemProps[];
  isLoading: boolean;
};
