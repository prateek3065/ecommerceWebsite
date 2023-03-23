import { useState, useEffect } from "react";

function getSavedValue(key: string, initialValue: string | Function) {
  const localStorageItem = localStorage.getItem(key);
  if (localStorage.getItem(key) === "") return null;
  if (localStorageItem !== null) return JSON.parse(localStorageItem);
  if (initialValue instanceof Function) return initialValue();
  return initialValue;
}

export default function useLocalStorage(
  key: string,
  initialValue: string | Function
) {
  const [value, setValue] = useState(() => {
    return getSavedValue(key, initialValue);
  });
  useEffect(() => {
    if (value !== null) localStorage.setItem(key, JSON.stringify(value));
  }, [value]);
  return [value, setValue];
}
