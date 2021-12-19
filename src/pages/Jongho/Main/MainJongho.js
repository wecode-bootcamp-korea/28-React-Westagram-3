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
    <div class="mainJongho">
      <NavJongho />
      <main>
        <section>
          <article class="feedContainer">
            <ProfileBlock />
            <img
              class="myFeedImage"
              src="https://user-images.githubusercontent.com/93215875/144997737-23918ede-3150-428b-a491-b8f816d7652b.jpg"
              alt="Mandalorian"
            />
            <ToolBox />
            <div class="likeMessageBlock">
              <img
                class="profileImageLikeMessage"
                src="https://user-images.githubusercontent.com/93215875/145150249-bc2e2a6e-bdd0-4c02-9005-1b748cc1a428.jpg"
                alt="profile"
              />
              <span>10명이 좋아합니다</span>
            </div>
            <CommentJongho />
            {/* <AddCommentJongho /> */}
          </article>
        </section>
        <section>
          <div class="myAccount">
            <img
              class="accountRecomm"
              src="https://user-images.githubusercontent.com/93215875/145207780-59e8db6a-25f0-470e-ab3d-12422ddf20ec.jpg"
              alt="wecode mark"
            />
            <div class="recommName">
              <p class="accId">account name1</p>
              <p class="subAccId">account name2</p>
            </div>
          </div>
          <article class="recommStory">
            <div class="storyHead">
              <span>스토리</span>
              <button class="seeAllBtn">모두 보기</button>
            </div>
            <ul>
              <li class="storyList">
                <img
                  class="accountRecomm"
                  src="https://user-images.githubusercontent.com/93215875/145207780-59e8db6a-25f0-470e-ab3d-12422ddf20ec.jpg"
                  alt="wecode mark"
                />
                <div class="accountBlock">
                  <span class="accId">ID</span>
                  <span class="subAccId">before Time</span>
                </div>
              </li>
              <li class="storyList">
                <img
                  class="accountRecomm"
                  src="https://user-images.githubusercontent.com/93215875/145207780-59e8db6a-25f0-470e-ab3d-12422ddf20ec.jpg"
                  alt="wecode mark"
                />
                <div class="accountBlock">
                  <span class="accId">ID</span>
                  <span class="subAccId">before Time</span>
                </div>
              </li>
              <li class="storyList">
                <img
                  class="accountRecomm"
                  src="https://user-images.githubusercontent.com/93215875/145207780-59e8db6a-25f0-470e-ab3d-12422ddf20ec.jpg"
                  alt="wecode mark"
                />
                <div class="accountBlock">
                  <span class="accId">ID</span>
                  <span class="subAccId">before Time</span>
                </div>
              </li>
              <li class="storyList">
                <img
                  class="accountRecomm"
                  src="https://user-images.githubusercontent.com/93215875/145207780-59e8db6a-25f0-470e-ab3d-12422ddf20ec.jpg"
                  alt="wecode mark"
                />
                <div class="accountBlock">
                  <span class="accId">ID</span>
                  <span class="subAccId">before Time</span>
                </div>
              </li>
            </ul>
          </article>
          <article class="recommWraper">
            <div class="recommHeader">
              <span>회원님을 위한 추천</span>
              <button class="seeAllBtn">모두 보기</button>
            </div>
            <ul>
              <li class="recommList">
                <div class="recommCont">
                  <img
                    class="accountRecomm"
                    src="https://user-images.githubusercontent.com/93215875/145207780-59e8db6a-25f0-470e-ab3d-12422ddf20ec.jpg"
                    alt="wecode mark"
                  />
                  <div class="accountBlock">
                    <span class="accId">ID</span>
                    <span class="subAccId">before Time</span>
                  </div>
                </div>
                <div>
                  <button class="followBtn" type="button">
                    팔로우
                  </button>
                </div>
              </li>
              <li class="recommList">
                <div class="recommCont">
                  <img
                    class="accountRecomm"
                    src="https://user-images.githubusercontent.com/93215875/145207780-59e8db6a-25f0-470e-ab3d-12422ddf20ec.jpg"
                    alt="wecode mark"
                  />
                  <div class="accountBlock">
                    <span class="accId">ID</span>
                    <span class="subAccId">before Time</span>
                  </div>
                </div>
                <div>
                  <button class="followBtn" type="button">
                    팔로우
                  </button>
                </div>
              </li>
              <li class="recommList">
                <div class="recommCont">
                  <img
                    class="accountRecomm"
                    src="https://user-images.githubusercontent.com/93215875/145207780-59e8db6a-25f0-470e-ab3d-12422ddf20ec.jpg"
                    alt="wecode mark"
                  />
                  <div class="accountBlock">
                    <span class="accId">ID</span>
                    <span class="subAccId">before Time</span>
                  </div>
                </div>
                <div>
                  <button class="followBtn" type="button">
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
