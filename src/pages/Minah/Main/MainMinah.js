import Aside from './Aside/Aside';
import Feed from './Feed/Feed';
import NavigationBar from './NavigationBar/NavigationBar';
import Story from './Story/Story';
import '../../../styles/reset.scss';
import '../../../styles/common.scss';
import './MainMinah.scss';
import { useEffect, useState } from 'react';

export default function MainMinah() {
  const [feeds, setFeeds] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/data/Minah/feedData.json')
      .then(res => res.json())
      .then(result => {
        setFeeds(result);
      });
  });

  return (
    <div className="main_minah">
      <NavigationBar />
      <main>
        <section>
          <Story />
          {feeds.map(feed => {
            return <Feed key={feed.id} feed={feed} />;
          })}
        </section>
        <aside>
          <Aside />
        </aside>
      </main>
    </div>
  );
}
