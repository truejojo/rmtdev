import { SortingControlsProps } from '../types';

export default function SortingControls({
  onClick,
  sortType,
}: SortingControlsProps) {
  return (
    <section className='sorting'>
      <i className='fa-solid fa-arrow-down-short-wide'></i>
      <SortingControlsButton
        onClick={() => onClick('relevant')}
        isActive={sortType === 'relevant'}
      >
        Relevant
      </SortingControlsButton>
      <SortingControlsButton
        onClick={() => onClick('recent')}
        isActive={sortType === 'recent'}
      >
        Recent
      </SortingControlsButton>
    </section>
  );
}

type SortingControlsButtonProps = {
  children: React.ReactNode;
  onClick: () => void;
  isActive: boolean;
};

const SortingControlsButton = ({
  children,
  onClick,
  isActive,
}: SortingControlsButtonProps) => {
  return (
    <button
      onClick={onClick}
      type='button'
      className={`sorting__button sorting__button--recent 
        ${isActive ? 'sorting__button--active' : ''}`}
    >
      {children}
    </button>
  );
};
