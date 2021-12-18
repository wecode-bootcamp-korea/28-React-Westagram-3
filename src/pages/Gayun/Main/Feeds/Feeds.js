import React from 'react';
import Feed from '../Feed/Feed';
import feedsData from '../../data/feed.json';
import { v4 as uuid } from 'uuid';
import './Feeds.scss';

function Feeds() {
  return (
    <div className="feeds">
      {feedsData.map(feed => (
        <Feed key={uuid()} feed={feed} />
      ))}
    </div>
  );
}

export default Feeds;
