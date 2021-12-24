import React, { useEffect, useRef, useState } from 'react';
import Feed from '../Feed/Feed';
import './Feeds.scss';
import Skeleton from '../Skeleton/Skeleton';
import LoadMoreFeed from '../LoadMoreFeed/LoadMoreFeed';

function Feeds() {
  const [page, setPage] = useState(0);
  const [feedList, setFeedList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const SKELETON_FEED_COUNT = 5;

  function createSkeletonFeed(count) {
    let skeletonFeedCount = Array.from({ length: count }, (v, i) => i);
    return skeletonFeedCount.map(num => {
      return <Skeleton key={num} />;
    });
  }

  useEffect(async () => {
    setIsLoading(true);
    fetchFeedData(page);
    setIsLoading(false);
  }, [page]);

  async function fetchFeedData(page) {
    const newFeeds = await (await fetch(`data/Gayun/feed${page}.json`)).json();
    setFeedList(prevFeeds => [...prevFeeds, ...newFeeds]);
  }

  return (
    <div className="feeds-gayun">
      <div className="feed-container">
        {isLoading
          ? createSkeletonFeed(SKELETON_FEED_COUNT)
          : feedList.map((feed, idx) => <Feed key={idx} feed={feed} />)}
      </div>
      <LoadMoreFeed isLoading={page !== 0 && isLoading} setPage={setPage} />
    </div>
  );
}

export default Feeds;
