import React, { useEffect, useState } from 'react';
import Feed from '../Feed/Feed';
import { v4 as uuid } from 'uuid';
import './Feeds.scss';

function Feeds() {
  const [feeds, setFeeds] = useState();
  let data;

  async function loadFeedData() {
    data = await await (
      await fetch('http://localhost:3001/data/feed.json')
    ).json();
    await setFeeds(data);
  }

  useEffect(() => {
    loadFeedData();
  });

  return (
    <div className="feeds">
      {feeds && feeds.map(feed => <Feed key={uuid()} feed={feed} />)}
    </div>
  );
}

export default Feeds;
