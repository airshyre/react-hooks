import React from "react";

export const useStickyState = <T>(
  key: string,
  fallbackState: T,
): [T, (newState: T) => void] => {
  const localStorageKey = `stickyState-${key}`;
  const [state, _setState] = React.useState<T>(localStorage.getItem(localStorageKey) ?? fallbackState);
  const setState = React.useCallback(
    (newState: T) => {
      saveToLocalStorage(localStorageKey, newState);
      _setState(newState);
    },
    [localStorageKey],
  );
  return [state, setState];
};
