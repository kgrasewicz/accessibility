import { useEffect, useState } from "react";

export const useMediaQuery = (query: string) => {
    const [matches, setMatches] = useState<boolean>();
  
    useEffect(() => {
      const media = window.matchMedia(query);
      if (media.matches !== matches) {
        setMatches(media.matches);
      }
      const listener = () => setMatches(media.matches);
      window.addEventListener('resize', listener);
      return () => window.removeEventListener('resize', listener);
    }, [matches, query]);
  
    if (matches === undefined && typeof window !== 'undefined') {
      return window.matchMedia(query).matches;
    }
  
    return matches;
  };
  
  export const useMinWidthMediaQuery = (minWidth: number) => {
    return useMediaQuery(getMinWidthQuery(minWidth));
  };

  const getMinWidthQuery = (minWidth: number) => `(min-width: ${minWidth}px)`;