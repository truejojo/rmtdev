import { useEffect, useRef, useState } from 'react';
import { TriangleDownIcon } from '@radix-ui/react-icons';
import BookmarksPopover from './BookmarksPopover';

export default function BookmarksButton() {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const popoverRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      // Schließen, wenn Klick außerhalb von Button und Popover
      if (
        !buttonRef.current?.contains(e.target as Node) &&
        !popoverRef.current?.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <section>
      <button
        ref={buttonRef}
        onClick={() => setIsOpen((prevIsOpen) => !prevIsOpen)}
        type='button'
        className='bookmarks-btn'
      >
        Bookmarks <TriangleDownIcon />
      </button>

      {isOpen && <BookmarksPopover ref={popoverRef} />}
    </section>
  );
}
