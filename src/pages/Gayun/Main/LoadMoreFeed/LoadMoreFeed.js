import React, { useRef } from 'react';
import './LoadMoreFeed.scss';

function LoadMoreFeed({ isLoading }) {
  const feedEndRef = useRef();
  // const callback = (entry, observer) => {
  //   if (entry[0].isIntersecting && entry[0].intersectionRatio > 0.5) {
  //     setIsLoadedMore(() => {
  //       return false;
  //     });
  //     loadFeedNum++;
  //     setTimeout(() => {
  //       loadMoreFeed(loadFeedNum);
  //     }, 2000);
  //   } else {
  //   }
  // };

  // let options = {
  //   root: null,
  //   rootMargin: '0px',
  //   threshold: 0.5,
  // };

  // function startObserve() {
  //   observer.observe(feedEndRef.current);
  // }

  // const observer = new IntersectionObserver(callback, options);

  return (
    <div className="feed-end" ref={feedEndRef}>
      {isLoading ? '' : <div className="loading" />}
    </div>
  );
}

export default LoadMoreFeed;
