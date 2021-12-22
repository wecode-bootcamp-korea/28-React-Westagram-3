import React from 'react';
import './SideBar.scss';
import { v4 as uuid } from 'uuid';

function SideBar({ stories }) {
  return (
    <aside key={uuid()} className="side-bar-gayun">
      <div className="account">
        <div className="img-container">
          <img src="images/Gayun/profile-img.jpg" alt="" />
        </div>
        <div className="id">
          <p className="main">Account</p>
          <div className="sub">
            <p className="eng">account</p>
            <p className="divider">|</p>
            <p className="kor">계정</p>
          </div>
        </div>
      </div>
      <article className="story">
        <div className="header">
          <h4>스토리</h4>
          <button className="spread">모두 보기</button>
        </div>
        <ul className="list collapse">
          {stories.map(story => (
            <li key={uuid()} className="item">
              <span className="img-container">
                <img
                  src={`images/Gayun/${story.profileImg}`}
                  alt="story-profile-img"
                  className="img"
                />
              </span>
              <span className="text">
                <p>{story.profileId}</p>
              </span>
            </li>
          ))}
        </ul>
      </article>

      <article className="recommend">
        <div className="header">
          <h4>회원님을 위한 추천</h4>
          <button className="spread">모두 보기</button>
        </div>
        <li className="list">
          <ul className="item">
            <span className="profile">
              <img
                src="images/Gayun/profile-img2.jpg"
                alt="recommend-profile-img"
              />
              <span>
                <p className="id">bysle_990</p>
                <p className="follower">this_this외 2명이 팔로우</p>
              </span>
            </span>
            <button className="follow">팔로우</button>
          </ul>
        </li>
      </article>
    </aside>
  );
}

export default SideBar;
