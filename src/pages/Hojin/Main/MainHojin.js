import React, { useState } from 'react';

// import CommentInput from './CommentInput';
import './MainHojin.scss';
// import Feedimg from './images/Hojin/feedimg.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
// import CommentInput from './CommentInput';
import CommentList from './CommentList';

function MainHojin() {
  return (
    <div className="mainPage">
      <div className="container">
        <div className="header">
          <h1>
            <img src="/images/Hojin/instagram_logo.png" /> Westagram
          </h1>

          <input type="text" placeholder="검색" />
          <div className="navBar">
            <ul>
              <li>
                <img src="/images/Hojin/story.jpg" alt="나침반" />
              </li>
              <li>
                <img src="/images/Hojin/heart.jpg" alt="하트" />
                <li />
                <img src="/images/Hojin/my.jpg" alt="마이" />
              </li>
            </ul>
          </div>
        </div>
        <div className="main">
          <article>
            <h2>
              <img src="/images/Hojin/feedimg.jpeg" />
              <span>hyj__0911 </span>
            </h2>
            <img src="/images/Hojin/main.jpg" />
            {/* <img src={Feedimg} /> */}
            <section className="heartBtn">
              <ul>
                <li>
                  <FontAwesomeIcon icon={faHeart} />
                </li>
                <li>
                  <FontAwesomeIcon icon={faComment} />
                </li>
                <li>
                  <FontAwesomeIcon icon={faDownload} />
                </li>
              </ul>
              <p>
                <b>좋아요 30개</b>
              </p>
              <p>강아지 ...</p>
              <br />
            </section>

            <div className="comment">
              <ul>
                <li>
                  <b>User1 : good👍👍👍👍👍👍👍 </b>
                </li>
                <li>
                  <b>User2 : good👍👍👍👍👍👍👍 </b>
                </li>
              </ul>
            </div>
            <div className="commentBox">
              <CommentList />
            </div>
          </article>
        </div>

        <div className="main-side">
          <h2> 스토리</h2>
          <div>
            <ul>
              <li>
                <img src="/images/Hojin/feedimg.jpeg" />
                roses_are_rosie
              </li>
              <li>
                <img src="/images/Hojin/feedimg.jpeg" />
                dlwlrma
              </li>
              <li>
                <img src="/images/Hojin/feedimg.jpeg" />
                nenierubyjane
              </li>
              <li>
                <img src="/images/Hojin/feedimg.jpeg" />
                imyour-joy
              </li>
              <li>
                <img src="/images/Hojin/feedimg.jpeg" />
                fdafafadfad
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
export default MainHojin;
