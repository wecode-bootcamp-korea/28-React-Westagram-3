// export default function MainHojin() {

// }
import React from 'react';
// import './MainHojin.scss';
// import Feedimg from './images/Hojin/feedimg.jpeg';

function MainHojin() {
  return (
    <div className="container">
      <div className="header">
        <h1>이미지 | Westagram</h1>
        <div className="navBar">
          <ul>
            <li>검색</li>
            <li>하트</li>
            <li>마이</li>
          </ul>
        </div>
      </div>
      <div className="main">
        <article>
          <h2>insta id</h2>
          <img src="/images/Hojin/feedimg.jpeg" />
          {/* <img src={Feedimg} /> */}
          <section className="heartBtn">
            <ul>
              <li>검색</li>
              <li>하트</li>
              <li>마이</li>
            </ul>
            1명이 좋아함
          </section>
          <div className="coments">
            <ul>
              <li>gkgk</li>
              <li>gkgk</li>
            </ul>
          </div>
          <input type="text" id="commentBox" placeholder="댓글달기..." />
          <button>게시</button>
        </article>
      </div>
      <div className="main-side">fdafdsa</div>
    </div>
  );
}
export default MainHojin;
