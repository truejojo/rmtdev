export default function ResultsCount({
  searchResultsCount,
}: {
  searchResultsCount: number;
}) {
  return <p className='count'>{searchResultsCount} results</p>;
}
