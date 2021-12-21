import React, { useEffect, useRef, useState } from 'react';
import Feed from '../Feed/Feed';
import { v4 as uuid } from 'uuid';
import './Feeds.scss';
import Skeleton from '../Skeleton/Skeleton';
import { FaJoint } from 'react-icons/fa';

function Feeds() {
  const [feeds, setFeeds] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isLoadedMore, setIsLoadedMore] = useState(true);
  const feedEndRef = useRef();
  const SKELETON_FEED_COUNT = 5;
  let loadFeedNum = 0;

  function createSkeletonFeed(count) {
    let skeletonFeedCount = Array.from({ length: count }, (v, i) => i);
    return skeletonFeedCount.map(num => {
      return <Skeleton key={num} />;
    });
  }

  async function loadFeedData(num) {
    const data = await (await fetch(`data/Gayun/feed${num}.json`)).json();
    await setTimeout(() => {
      setFeeds(data);
      setIsLoaded(() => {
        return true;
      });
    }, 2000);
    await startObserve();
  }

  async function loadMoreFeed(num) {
    const data = await (await fetch(`data/Gayun/feed${num}.json`)).json();
    await setTimeout(() => {
      setFeeds(feeds => {
        return feeds.concat(data);
      });
    });
    await setIsLoadedMore(() => {
      return true;
    });
  }

  useEffect(() => {
    loadFeedData(0);
  }, []);

  const callback = (entry, observer) => {
    if (entry[0].isIntersecting && entry[0].intersectionRatio > 0.5) {
      setIsLoadedMore(() => {
        return false;
      });
      loadFeedNum++;
      setTimeout(() => {
        loadMoreFeed(loadFeedNum);
      }, 2000);
    } else {
    }
  };

  let options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5,
  };

  const observer = new IntersectionObserver(callback, options);

  function startObserve() {
    observer.observe(feedEndRef.current);
  }
  return (
    <div className="feeds-gayun">
      <div className="feed-container">
        {isLoaded
          ? feeds.map((feed, idx) => <Feed key={idx} feed={feed} />)
          : createSkeletonFeed(SKELETON_FEED_COUNT)}
      </div>
      <div className="feed-end" ref={feedEndRef}>
        {isLoadedMore ? '' : <div className="loading" />}
      </div>
    </div>
  );
}

export default Feeds;
