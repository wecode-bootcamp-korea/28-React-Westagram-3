import React from 'react';
import { AiFillSetting } from 'react-icons/ai';
import { BsInstagram } from 'react-icons/bs';
import './Nav.scss';

function Nav() {
  return (
    <nav className="nav-gayun">
      <span className="logo">
        <span className="icon">
          <BsInstagram />
        </span>
        <span className="text">Instagram</span>
      </span>
      <span className="search">
        <input type="text" name="search" placeholder="              🔎검색" />
        <div className="result-container hide">
          <div className="box" />
          <ul className="result-list" />
        </div>
      </span>
      <span className="buttons">
        <button className="button">
          <img
            src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
            alt="explore"
          />
        </button>
        <button className="button">
          <img
            src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
            alt="like"
          />
        </button>
        <button className="button">
          <img
            src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
            id="my__img"
            alt="my"
          />
        </button>
        <ul className="my hide">
          <div />
          <li className="item">
            <i className="far fa-user-circle" />
            <button className="title">프로필</button>
          </li>
          <li className="item">
            <i className="far fa-bookmark" />
            <button className="title">저장됨</button>
          </li>
          <li className="item">
            <AiFillSetting />
            <button className="title">설정</button>
          </li>
          <div className="logout">로그아웃</div>
        </ul>
      </span>
    </nav>
  );
}

export default Nav;
