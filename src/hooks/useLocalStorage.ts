import { useState, useEffect } from 'react';

const useLocalStorage = (key: string, initialValue: number[] = []) => {
  // warum einen function aufruf innerhalb von useState?
  // Damit der initiale Wert nur einmal gesetzt wird, wenn der Provider erstellt wird.
  const [value, setValue] = useState<number[]>(() =>
    JSON.parse(localStorage.getItem(key) || '[]'),
  );

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(initialValue));
  }, [initialValue]);

  return [value, setValue] as const;
};

export default useLocalStorage;
