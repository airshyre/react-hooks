import React from 'react'

export const useKeyPress = (targetKey: string): boolean => {
    const [keyPressed, setKeyPressed] = React.useState(false);
    const downHandler = React.useCallback(({ key }: {key: string}): void =>  {
      if (key === targetKey) {
        setKeyPressed(true);
      }
    }, [])
    const upHandler = React.useCallback(({ key }: {key: string}): void => {
      if (key === targetKey) {
        setKeyPressed(false);
      }
    }, [])
    React.useEffect(() => {
      window.addEventListener("keydown", downHandler);
      window.addEventListener("keyup", upHandler);
      return () => {
        window.removeEventListener("keydown", downHandler);
        window.removeEventListener("keyup", upHandler);
      };
    }, []); 
    return keyPressed;
  }