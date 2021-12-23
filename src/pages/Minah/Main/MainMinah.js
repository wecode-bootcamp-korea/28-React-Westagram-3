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
    const fetchData = async () => {
      const response = await fetch(
        'http://localhost:3000/data/Minah/feedData.json'
      );
      const data = await response.json();
      setFeeds(data);
    };
    fetchData();
  }, []);

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
