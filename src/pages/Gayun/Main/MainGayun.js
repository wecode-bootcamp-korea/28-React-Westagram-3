import React from 'react';
import Nav from './Nav/Nav';
import Feeds from './Feeds/Feeds';
import Story from './Story/Story';
import SideBar from './SideBar/SideBar';

function MainGayun() {
  return (
    <div className="main-gayun">
      <Nav />
      <Story />
      <div className="main-content">
        <Feeds />
        <SideBar />
      </div>
    </div>
  );
}

export default MainGayun;
