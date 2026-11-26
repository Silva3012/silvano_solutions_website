import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * On navigation, scroll to the element named in the URL hash (e.g.
 * /services#ai-solutions), or to the top of the page when there is none.
 * Pages should not reset scroll themselves, or they would undo the hash scroll.
 */
export const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Wait a frame so the new route's content exists before looking it up.
      const frame = requestAnimationFrame(() => {
        const target = document.getElementById(decodeURIComponent(hash.slice(1)));
        if (target) {
          target.scrollIntoView();
        } else {
          window.scrollTo(0, 0);
        }
      });
      return () => cancelAnimationFrame(frame);
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
};
