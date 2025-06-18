import { SortingControlsProps } from '../types';

export default function SortingControls({
  onClick,
  sortType,
}: SortingControlsProps) {
  return (
    <section className='sorting'>
      <i className='fa-solid fa-arrow-down-short-wide'></i>
      <button
        onClick={() => onClick('relevant')}
        type='button'
        className={`sorting__button sorting__button--relevant ${
          sortType === 'relevant' ? 'sorting__button--active' : ''
        }`}
      >
        Relevant
      </button>
      <button
        onClick={() => onClick('recent')}
        type='button'
        className={`sorting__button sorting__button--recent ${
          sortType === 'recent' ? 'sorting__button--active' : ''
        }`}
      >
        Recent
      </button>
    </section>
  );
}
