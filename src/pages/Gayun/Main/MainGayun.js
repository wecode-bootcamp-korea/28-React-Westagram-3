import React from 'react';
import Nav from './Nav/Nav';
import Feeds from './Feeds/Feeds';
import Story from './Story/Story';
import SideBar from './SideBar/SideBar';

function MainGayun() {
  return (
    <>
      <Nav />
      <Story />
      <div className="main">
        <Feeds />
        <SideBar />
      </div>
    </>
  );
}

export default MainGayun;
