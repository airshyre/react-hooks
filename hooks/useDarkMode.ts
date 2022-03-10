import React from 'react'

export const useDarkMode = () => {
  const darkMedia = window?.matchMedia("(prefers-color-scheme: dark)");
  const [isDark, setIsDark] = React.useState(darkMedia.matches);
  const handleDarkMode = React.useCallback(
    (e: MediaQueryListEvent) => setIsDark(e.matches),
    [setIsDark],
  );
  React.useEffect(() => {
    darkMedia.addEventListener("change", handleDarkMode);
    return () => darkMedia.removeEventListener("change", handleDarkMode);
  }, [darkMedia, handleDarkMode]);
  return isDark;
}
