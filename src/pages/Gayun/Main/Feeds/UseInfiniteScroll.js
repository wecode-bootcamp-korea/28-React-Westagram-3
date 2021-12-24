import { useCallback, useState } from 'react';
import { useEffect } from 'react/cjs/react.development';

function UseInfiniteScroll(observeNode, onIntersect) {
  // const [ref, setRef] = useState(observeNode);
  const target = observeNode;
  let options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5,
  };

  const checkIntersect = useCallback((entry, observer) => {
    if (entry.isIntersecting) {
      onIntersect();
    }
    console.log(entry);
  }, []);

  useEffect(() => {
    console.log('effect');
    let observer;
    // if (ref) {
    //   console.log('ref');
    // } else {
    //   console.log('no ref');
    // }

    observer = new IntersectionObserver(function (target, observer) {
      console.log(target);
    });
    observeNode && observer.observe(observeNode.current);
    return () => observer && observer.unobserve();
  }, [checkIntersect]);
  // return [ref, setRef];
}

export default UseInfiniteScroll;
