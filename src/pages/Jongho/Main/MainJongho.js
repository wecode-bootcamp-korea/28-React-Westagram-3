import React from 'react';
import Footer from '../../../components/Footer/Footer';
import '../../../components/Footer/Footer.scss';
import './MainJongho.scss';
import NavJongho from '../Nav/NavJongho';
import ProfileBlock from './Feed/Profile/ProfileBlock';
import ToolBox from '../Main/Feed/ToolBox/ToolboxJongho';
import CommentJongho from './Feed/Comment/CommentJongho';

function Main() {
  return (
    <div className="mainJongho">
      <NavJongho />
      <main>
        <section>
          <article className="feedContainer">
            {/* Feed 맨 위에 계정이름과 사진 칸 */}
            <ProfileBlock />
            <img
              className="myFeedImage"
              src="https://user-images.githubusercontent.com/93215875/144997737-23918ede-3150-428b-a491-b8f816d7652b.jpg"
              alt="Mandalorian"
            />
            {/* Feed 사진 밑 여러가지 기능 버튼 모음 */}
            <ToolBox />
            <div className="likeMessageBlock">
              <img
                className="profileImageLikeMessage"
                src="https://user-images.githubusercontent.com/93215875/145150249-bc2e2a6e-bdd0-4c02-9005-1b748cc1a428.jpg"
                alt="profile"
              />
              <span>10명이 좋아합니다</span>
            </div>
            {/* 댓글목록 및 댓글 추가 입력 */}
            <CommentJongho />
          </article>
        </section>
        <section>
          {/*여기는 사이드 메뉴들 모음*/}
          <div className="myAccount">
            <img
              className="accountRecomm"
              src="https://user-images.githubusercontent.com/93215875/145207780-59e8db6a-25f0-470e-ab3d-12422ddf20ec.jpg"
              alt="wecode mark"
            />
            <div className="recommName">
              <p className="accId">account name1</p>
              <p className="subAccId">account name2</p>
            </div>
          </div>
          <article className="recommStory">
            <div className="storyHead">
              <span>스토리</span>
              <button className="seeAllBtn">모두 보기</button>
            </div>
            <ul>
              <li className="storyList">
                <img
                  className="accountRecomm"
                  src="https://user-images.githubusercontent.com/93215875/145207780-59e8db6a-25f0-470e-ab3d-12422ddf20ec.jpg"
                  alt="wecode mark"
                />
                <div className="accountBlock">
                  <span className="accId">ID</span>
                  <span className="subAccId">before Time</span>
                </div>
              </li>
              <li className="storyList">
                <img
                  className="accountRecomm"
                  src="https://user-images.githubusercontent.com/93215875/145207780-59e8db6a-25f0-470e-ab3d-12422ddf20ec.jpg"
                  alt="wecode mark"
                />
                <div className="accountBlock">
                  <span className="accId">ID</span>
                  <span className="subAccId">before Time</span>
                </div>
              </li>
              <li className="storyList">
                <img
                  className="accountRecomm"
                  src="https://user-images.githubusercontent.com/93215875/145207780-59e8db6a-25f0-470e-ab3d-12422ddf20ec.jpg"
                  alt="wecode mark"
                />
                <div className="accountBlock">
                  <span className="accId">ID</span>
                  <span className="subAccId">before Time</span>
                </div>
              </li>
              <li className="storyList">
                <img
                  className="accountRecomm"
                  src="https://user-images.githubusercontent.com/93215875/145207780-59e8db6a-25f0-470e-ab3d-12422ddf20ec.jpg"
                  alt="wecode mark"
                />
                <div className="accountBlock">
                  <span className="accId">ID</span>
                  <span className="subAccId">before Time</span>
                </div>
              </li>
            </ul>
          </article>
          <article className="recommWraper">
            <div className="recommHeader">
              <span>회원님을 위한 추천</span>
              <button className="seeAllBtn">모두 보기</button>
            </div>
            <ul>
              <li className="recommList">
                <div className="recommCont">
                  <img
                    className="accountRecomm"
                    src="https://user-images.githubusercontent.com/93215875/145207780-59e8db6a-25f0-470e-ab3d-12422ddf20ec.jpg"
                    alt="wecode mark"
                  />
                  <div className="accountBlock">
                    <span className="accId">ID</span>
                    <span className="subAccId">before Time</span>
                  </div>
                </div>
                <div>
                  <button className="followBtn" type="button">
                    팔로우
                  </button>
                </div>
              </li>
              <li className="recommList">
                <div className="recommCont">
                  <img
                    className="accountRecomm"
                    src="https://user-images.githubusercontent.com/93215875/145207780-59e8db6a-25f0-470e-ab3d-12422ddf20ec.jpg"
                    alt="wecode mark"
                  />
                  <div className="accountBlock">
                    <span className="accId">ID</span>
                    <span className="subAccId">before Time</span>
                  </div>
                </div>
                <div>
                  <button className="followBtn" type="button">
                    팔로우
                  </button>
                </div>
              </li>
              <li className="recommList">
                <div className="recommCont">
                  <img
                    className="accountRecomm"
                    src="https://user-images.githubusercontent.com/93215875/145207780-59e8db6a-25f0-470e-ab3d-12422ddf20ec.jpg"
                    alt="wecode mark"
                  />
                  <div className="accountBlock">
                    <span className="accId">ID</span>
                    <span className="subAccId">before Time</span>
                  </div>
                </div>
                <div>
                  <button className="followBtn" type="button">
                    팔로우
                  </button>
                </div>
              </li>
            </ul>
          </article>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Main;
