import React from 'react';
import './SideBar.scss';
import storyData from '../../data/story.json';
import { v4 as uuid } from 'uuid';

function SideBar() {
  return (
    <aside key={uuid()} className="side-bar">
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
      <article class="story">
        <div class="header">
          <h4>스토리</h4>
          <button class="spread">모두 보기</button>
        </div>
        <ul class="list collapse">
          {storyData.map(story => (
            <li key={uuid()} class="item">
              <span class="img-container">
                <img
                  src={`images/Gayun/${story.profileImg}`}
                  alt="story-profile-img"
                  class="img"
                />
              </span>
              <span class="text">
                <p>{story.profileId}</p>
                {/* <p class="time">{calculateDateGap(i.uploadDate)}일 전</p> */}
              </span>
            </li>
          ))}
        </ul>
      </article>

      <article class="recommend">
        <div class="header">
          <h4>회원님을 위한 추천</h4>
          <button class="spread">모두 보기</button>
        </div>
        <li class="list">
          <ul class="item">
            <span class="profile">
              <img
                src="images/Gayun/profile-img2.jpg"
                alt="recommend-profile-img"
              />
              <span>
                <p class="id">bysle_990</p>
                <p class="follower">this_this외 2명이 팔로우</p>
              </span>
            </span>
            <button class="follow">팔로우</button>
          </ul>
        </li>
      </article>
    </aside>
  );
}

export default SideBar;
