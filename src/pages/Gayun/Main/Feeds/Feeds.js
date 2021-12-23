import React, { useEffect, useRef, useState } from 'react';
import Feed from '../Feed/Feed';
import './Feeds.scss';
import Skeleton from '../Skeleton/Skeleton';
import UseIntersected from './UseInfiniteScroll';
import UseInfiniteScroll from './UseInfiniteScroll';
import LoadMoreFeed from '../LoadMoreFeed/LoadMoreFeed';

function Feeds() {
  const [page, setPage] = useState(0);
  const [feedList, setFeedList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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

  useEffect(async () => {
    setIsLoading(true);
    const list = await (await fetch(`data/Gayun/feed0.json`)).json();
    setFeedList(prev => [...prev, ...list]);
    setIsLoading(false);
  }, [page]);

  async function loadFeedData(num) {
    const data = await (await fetch(`data/Gayun/feed${num}.json`)).json();
    setTimeout(() => {
      setFeeds(data);
      setIsLoaded(() => {
        return true;
      });
    }, 2000);
  }

  async function loadMoreFeed(num) {
    const data = await (await fetch(`data/Gayun/feed${num}.json`)).json();
    setTimeout(() => {
      setFeeds(feeds => {
        return feeds.concat(data);
      });
    });
    setIsLoadedMore(() => {
      return true;
    });
  }

  useEffect(() => {
    loadFeedData(0);
  }, []);

  return (
    <div className="feeds-gayun">
      <div className="feed-container">
        {isLoaded
          ? feeds.map((feed, idx) => <Feed key={idx} feed={feed} />)
          : createSkeletonFeed(SKELETON_FEED_COUNT)}
      </div>
      <LoadMoreFeed isLoading={page !== 0 && isLoading} setPage={setPage} />
    </div>
  );
}

export default Feeds;
