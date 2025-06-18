import {
  ArrowBottomLeftIcon,
  ArrowBottomRightIcon,
} from '@radix-ui/react-icons';
import { PaginationDirectionProps } from '../types';

type PaginationControlsProps = {
  onClick: (direction: PaginationDirectionProps) => void;
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
        <PaginatinControlsButton onClick={() => onClick('previous')}>
          <ArrowBottomLeftIcon />
          Page {currentPage - 1}
        </PaginatinControlsButton>
      )}
      {currentPage < maxPages && (
        <PaginatinControlsButton onClick={() => onClick('next')}>
          Page {currentPage + 1}
          <ArrowBottomRightIcon />
        </PaginatinControlsButton>
      )}
    </section>
  );
}

type PaginationControlsButtonProps = {
  children: React.ReactNode;
  onClick: () => void;
};
const PaginatinControlsButton = ({
  children,
  onClick,
}: PaginationControlsButtonProps) => (
  <button onClick={onClick} type='button' className='pagination__button'>
    {children}
  </button>
);
