import React from 'react';
import Feed from '../Feed/Feed';
import feedsData from '../../data/feed.json';
import './Feeds.scss';

function Feeds() {
  return (
    <div className="feeds">
      {feedsData.map(feed => (
        <Feed feed={feed} />
      ))}
    </div>
  );
}

export default Feeds;
