import { useState, useEffect } from 'react';

const useLocalStorage = <T>(
  key: string,
  initialValue: T,
): [T, React.Dispatch<React.SetStateAction<T>>] => {
  // warum einen function aufruf innerhalb von useState?
  // Damit der initiale Wert nur einmal gesetzt wird, wenn der Provider erstellt wird.
  const [value, setValue] = useState(() =>
    JSON.parse(localStorage.getItem(key) || JSON.stringify(initialValue)),
  );

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue] as const;
};

export default useLocalStorage;
