import { useCallback, useState } from 'react';
import { useEffect } from 'react/cjs/react.development';

function UseInfiniteScroll(onIntersect) {
  const [ref, setRef] = useState(null);

  let options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5,
  };

  const checkIntersect = useCallback(([entry], observer) => {
    if (entry.isIntersecting) {
      onIntersect(entry, observer);
    }
  }, []);

  useEffect(() => {
    let observer;
    if (ref) {
      observer = new IntersectionObserver(checkIntersect, options);
      observer.observe(ref);
    }
    return () => observer && observer.disconnect();
  }, [ref, options, checkIntersect]);
  return [ref, setRef];
}

export default UseInfiniteScroll;
