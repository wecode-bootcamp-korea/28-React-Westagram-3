import React, { useRef } from 'react';
import { useEffect } from 'react/cjs/react.development';
import './LoadMoreFeed.scss';

function LoadMoreFeed({ isLoading, setPage }) {
  const feedEndRef = useRef(null);
  const observer = new IntersectionObserver(entry => {
    if (entry[0].isIntersecting) {
      setPage(page => page + 1);
    }
  });

  useEffect(() => {
    observer.observe(feedEndRef.current);
    return () => {
      observer.unobserve(feedEndRef.current);
    };
  }, []);

  return (
    <div className="feed-end" ref={feedEndRef}>
      {isLoading ? <div className="loading" /> : ''}
    </div>
  );
}

export default LoadMoreFeed;
