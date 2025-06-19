import { useEffect } from 'react';

export const useOnClickOutside = (
  refs: React.RefObject<HTMLElement | null>[],
  callback: () => void,
) => {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      // Schließen, wenn Klick außerhalb von Button und Popover
      if (refs.every((ref) => !ref.current?.contains(e.target as Node))) {
        callback();
      }
    };
    document.addEventListener('click', handleClick);

    return () => document.removeEventListener('click', handleClick);
  }, [refs, callback]);
};
