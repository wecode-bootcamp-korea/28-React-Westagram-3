import React from 'react';
import Feed from './Feed/Feed';
import feedsData from '../../data/feed.json';
import styles from './Feeds.scss';

function Feeds() {
  return (
    <div className={styles.container}>
      {feedsData.map(data => (
        <Feed feed={data} />
      ))}
    </div>
  );
}

export default Feeds;
