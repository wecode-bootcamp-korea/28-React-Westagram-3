import React from 'react';

function SideBar() {
  return (
    <div className="side-bar">
      <div class="story">
        <div class="header">
          <h4>스토리</h4>
          <button class="spread">모두 보기</button>
        </div>
        <ul class="list collapse">
          <li class="item">
            <span class="img-container profile-container">
              <img src="" alt="story-profile-img" class="img profile-img" />
            </span>
            <span class="text">
              <p>r</p>
              {/* <p class="time">{calculateDateGap(i.uploadDate)}일 전</p> */}
            </span>
          </li>
        </ul>
      </div>

      <div class="recommend">
        <div class="header">
          <h4>회원님을 위한 추천</h4>
          <button class="spread">모두 보기</button>
        </div>
        <li class="list">
          <ul class="item">
            <span class="profile">
              <img src="images/profile-img2.jpg" alt="" class={styles.img} />
              <span>
                <p class="id">bysle_990</p>
                <p class="follower">this_this외 2명이 팔로우</p>
              </span>
            </span>
            <button class="follow">팔로우</button>
          </ul>
        </li>
      </div>
    </div>
  );
}

export default SideBar;
