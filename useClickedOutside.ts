import React from "react";

export const useClickedOutside = <T extends HTMLElement>(
  onClickOutside: () => {},
) => {
  const ref = React.useRef<T>(null);
  React.useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current?.contains?.(e.target as Node)) onClickOutside();
    };
    window.addEventListener("click", handleClick);
    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, [onClickOutside]);
  return ref;
};
