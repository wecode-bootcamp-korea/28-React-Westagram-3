import React from 'react';
import '../Nav/NavJongho.scss';

const NavJongho = () => {
  return (
    <div className="navJongho">
      <header>
        <nav>
          <div id="symbolBlock">
            <img
              className="instaImg"
              src="/images/Jongho/Main/instagram-logo.png"
              alt="instagram logo"
            />
            <span className="instagramLogo">Instagram</span>
          </div>
          <div id="searchBlock">
            <img
              className="magnifier"
              src="/images/Jongho/Main/magnifier.png"
              alt="돋보기"
            />
            <input className="searchInput" type="text" placeholder="검색" />
          </div>
          <div id="otherContents">
            <img
              className="explore"
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
              alt="Explore Button"
            />
            <img
              id="heart"
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
              alt="Heart symbol"
            />
            <img
              className="user"
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
              alt="Person symbol"
            />
          </div>
        </nav>
      </header>
    </div>
  );
};

export default NavJongho;
