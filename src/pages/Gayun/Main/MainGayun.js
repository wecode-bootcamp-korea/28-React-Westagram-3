import React, { useState } from 'react';
import Nav from './Nav/Nav';
import Feeds from './Feeds/Feeds';
import Story from './Story/Story';
import SideBar from './SideBar/SideBar';
import { useEffect } from 'react/cjs/react.development';

function MainGayun() {
  const [stories, setStories] = useState();
  async function loadStories() {
    const data = await (
      await fetch('http://localhost:3000/data/Gayun/story.json')
    ).json();
    setStories(data);
  }

  useEffect(() => {
    loadStories();
  }, []);

  return (
    <div className="main-gayun">
      <Nav />
      <Story stories={stories} />
      <div className="main-content">
        <Feeds />
        {stories && <SideBar stories={stories} />}
      </div>
    </div>
  );
}

export default MainGayun;
