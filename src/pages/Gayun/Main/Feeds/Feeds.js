import React, { useEffect, useRef, useState } from 'react';
import Feed from '../Feed/Feed';
import { v4 as uuid } from 'uuid';
import './Feeds.scss';
import Skeleton from '../Skeleton/Skeleton';

function Feeds() {
  const [feeds, setFeeds] = useState([]);
  const feedEndRef = useRef();
  let loadNum = 0;

  async function loadFeedData(num) {
    const data = await (await fetch(`data/feed${num}.json`)).json();
    await setFeeds(data);
    await startObserve();
  }

  useEffect(() => {
    console.log(feeds);
  }, [feeds]);

  async function loadMoreFeed(num) {
    const data = await (await fetch(`data/feed${num}.json`)).json();
    const updated = await feeds.concat(data);
    console.log(updated);
    await setFeeds(feeds => {
      return feeds.concat(data);
    });
  }

  useEffect(() => {
    loadFeedData(0);
  }, []);

  let loaded = false;

  const callback = (entry, observer) => {
    if (entry[0].isIntersecting && entry[0].intersectionRatio > 0.5) {
      console.log('dd');

      // if (loaded === false) {
      // loadNum++;
      setTimeout(() => {
        loadMoreFeed(1);
      }, 1000);
      // }
      // loaded = true;
      // observer.unobserve(feedEndRef.current);
    } else {
      // observer.unobserve(feedEndRef.current);
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
        {/* {feeds && feeds.map(feed => <Feed key={uuid()} feed={feed} />)} */}
        {feeds && feeds.map(feed => <Skeleton key={uuid} />)}
      </div>
      <div className="feed-end" ref={feedEndRef}>
        feedEnd
      </div>
    </div>
  );
}

export default Feeds;
