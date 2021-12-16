import React from 'react';
import Feed from '../Feed/Feed';
import feedsData from '../../data/feed.json';
import styles from './Feeds.scss';

function Feeds() {
  return (
    <div className={styles.container}>
      {feedsData.map(feed => (
        <Feed feed={feed} />
      ))}
    </div>
  );
}

export default Feeds;
