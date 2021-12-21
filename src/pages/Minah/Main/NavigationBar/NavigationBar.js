import { useState } from 'react';

import './NavigationBar.scss';

export default function NavigationBar() {
  const [isOpen, setSubMenu] = useState(false);

  const toggleSubMenu = () => {
    setSubMenu(!isOpen);
  };

  return (
    <header>
      <nav>
        <div className="nav_wrap">
          <div className="logo_box">
            <a href="#">
              <h1>Westagram</h1>
            </a>
          </div>

          <div className="search_box">
            <input
              type="text"
              id="search"
              placeholder="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;검색"
            />
          </div>

          <div className="icons_box">
            <img alt="홈" src="images/Minah/Main/home.png" />

            <img alt="다이렉트 메시지" src="images/Minah/Main/dm.png" />

            <img alt="추가" src="images/Minah/Main/plus.png" />

            <img
              alt="탐색"
              src="images/Minah/Main/compass.png"
              className="rotateimg180"
            />

            <img alt="하트" src="images/Minah/Main/heart-blank.png" />

            <button type="button" id="profile_menu" onClick={toggleSubMenu}>
              <img
                alt="내 프로필"
                src="images/Minah/Main/profile.jpg"
                className="profile"
              />
            </button>
          </div>

          <div className={isOpen ? 'account_menu show' : 'account_menu hide'}>
            <div className="account_menu_wrap">
              <div className="account_submenu">
                <img
                  alt="내 프로필"
                  className="submenu_icons"
                  src="images/Minah/Main/user.png"
                />

                <span>프로필</span>
              </div>

              <div className="account_submenu">
                <img
                  alt="북마크"
                  className="submenu_icons"
                  src="images/Minah/Main/bookmark_default.png"
                />

                <span>저장됨</span>
              </div>

              <div className="account_submenu">
                <img
                  alt="설정"
                  className="submenu_icons"
                  src="images/Minah/Main/preference.png"
                />

                <span>설정</span>
              </div>

              <div className="account_submenu">
                <img
                  alt="계정 전환"
                  className="submenu_icons"
                  src="images/Minah/Main/refresh-arrow.png"
                />

                <span>계정 전환</span>
              </div>
            </div>

            <div className="logout">
              <p>로그아웃</p>
            </div>
          </div>
        </div>

        <div
          onClick={toggleSubMenu}
          className={isOpen ? 'overlay show' : 'overlay hide'}
        />
      </nav>
    </header>
  );
}
