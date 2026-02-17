import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 0);
        return;
      }
    }

    // If no hash → scroll to top
    window.scrollTo({
      top: 0,
      behavior: 'auto',
    });
  }, [pathname, hash]);

  return null;
}
