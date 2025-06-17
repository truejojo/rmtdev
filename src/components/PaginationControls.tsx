import {
  ArrowBottomLeftIcon,
  ArrowBottomRightIcon,
} from '@radix-ui/react-icons';

type PaginationControlsProps = {
  onClick: (direction: 'previous' | 'next') => void;
  currentPage: number;
  maxPages: number;
};

export default function PaginationControls({
  onClick,
  currentPage,
  maxPages,
}: PaginationControlsProps) {
  return (
    <section className='pagination'>
      {currentPage > 1 && (
        <button
          onClick={() => onClick('previous')}
          type='button'
          className='pagination__button pagination__button--prev'
        >
          <ArrowBottomLeftIcon />
          Page {currentPage - 1}
        </button>
      )}
      {/* {currentPage > 0 && maxPages > 1 && (
        <span className='pagination__current'>{currentPage}</span>
      )} */}
      {currentPage < maxPages && (
        <button
          onClick={() => onClick('next')}
          type='button'
          className='pagination__button pagination__button--next'
        >
          Page {currentPage + 1}
          <ArrowBottomRightIcon />
        </button>
      )}
    </section>
  );
}
