import './Aside.scss';

export default function Aside() {
  return (
      <div className="aside_wrap_minah">
          <div className="aside_account">
              <div className="aside_profile story_old_border">
                  <img src="images/Minah/Main/profile.jpg" className="account_photo" alt="내 프로필" />
              </div>
              <div className="aside_id">
                  <p>my1nsta</p>
                  <p>Me</p>
              </div>
              <button className="change_account_btn">전환</button>
          </div>
          <div className="aside_recommend">
              <div className="aside_recommend_header">
                  <span>회원님을 위한 추천</span>
                  <span>모두 보기</span>
              </div>
              <div className="aside_recommend_body">
                  <div className="aside_recommend_account">
                      <div className="recommend_profile">
                          <img src="images/Minah/Main/nike.jpg" className="recommend_photo" alt="내 프로필" />
                      </div>
                      <div className="recommend_id">
                          <a href="https://www.instagram.com/nike/">
                              nike_korea
                          </a>
                          <p>회원님을 위한 추천</p>
                      </div>
                      <button className="change_account_btn follow_btn">팔로우</button>
                  </div>
                  <div className="aside_recommend_account">
                      <div className="recommend_profile">
                          <img src="https://images.unsplash.com/photo-1585159183446-0fc0eaf9e57c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWNkb25hbGRzfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                              className="recommend_photo" alt="내 프로필" />
                      </div>
                      <div className="recommend_id">
                          <a href="https://www.instagram.com/mcdonalds_kr/">mcdonalds_korea</a>
                          <p>회원님을 위한 추천</p>
                      </div>
                      <button className="change_account_btn follow_btn">팔로우</button>
                  </div>
              </div>
              <div className="aside_recommend_footer">
                  <ul className="aside_tags">
                      <li><a>소개</a></li>
                      <li><a>도움말</a></li>
                      <li><a>홍보 센터</a></li>
                      <li><a>API</a></li>
                      <li><a>채용 정보</a></li>
                      <li><a>개인정보처리방침</a></li>
                      <li><a>약관</a></li>
                      <li><a>위치</a></li>
                      <li><a>인기 계정</a></li>
                      <li><a>해시태그</a></li>
                      <li><a>언어</a></li>
                  </ul>
                  <p>&copy; 2021 WESTAGRAM FROM WECODE 28TH</p>
              </div>
          </div>
      </div>
  );
}