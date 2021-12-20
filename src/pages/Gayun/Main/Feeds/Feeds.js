import React, { useEffect, useRef, useState } from 'react';
import Feed from '../Feed/Feed';
import { v4 as uuid } from 'uuid';
import './Feeds.scss';
import Skeleton from '../Skeleton/Skeleton';

function Feeds() {
  const [feeds, setFeeds] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isLoadedMore, setIsLoadedMore] = useState(false);
  const feedEndRef = useRef();

  async function loadFeedData(num) {
    const data = await (await fetch(`data/feed${num}.json`)).json();
    await setTimeout(() => {
      setFeeds(data);
      setIsLoaded(() => {
        return true;
      });
      console.log(isLoaded);
    });
    await startObserve();
  }

  useEffect(() => {
    console.log(feeds);
  }, [feeds]);

  async function loadMoreFeed(num) {
    const data = await (await fetch(`data/feed${num}.json`)).json();
    await setTimeout(() => {
      setFeeds(feeds => {
        return feeds.concat(data);
      });
    });
    await setIsLoaded(() => {
      return true;
    });
    console.log(isLoaded);
  }

  useEffect(() => {
    loadFeedData(0);
  }, []);

  const callback = (entry, observer) => {
    if (entry[0].isIntersecting && entry[0].intersectionRatio > 0.5) {
      setIsLoadedMore(() => {
        return false;
      });
      setTimeout(() => {
        loadMoreFeed(1);
      }, 5000);
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
    <div className="feeds">
      <div className="feed-container">
        {isLoaded ? console.log('loaded!') : console.log('not yet...')}
        {isLoaded
          ? feeds.map(feed => <Feed key={uuid()} feed={feed} />)
          : feeds && feeds.map(feed => <Skeleton key={uuid()} />)}
      </div>
      <div className="feed-end" ref={feedEndRef}>
        <div className="loading" />
      </div>
    </div>
  );
}

export default Feeds;
