export default function Feed() {
  return (
      <div className="post_box">
          <article>
              <div className="post_wrap">
                  <div className="post_header">
                      <div className="post_account">
                          <img src="images/Minah/Main/profile1.jpg" className="post_profile" alt="프사" />
                          <a href="https://www.instagram.com/lee_heung_yong_cake/">lee_heung_yong_cake</a>
                      </div>
                      <button className="post_info">
                          <img src="images/Minah/Main/option.png" className="post_option" alt="더보기" />
                      </button>
                  </div>
                  <div className="post_body">
                      <div className="post_photo_wrap">
                          <div className="post_photo_container">
                              <img src="images/Minah/Main/christmas_cookies1.jpg" className="post_photos" alt="사진1" />
                              <img src="images/Minah/Main/christmas_cookies2.jpg" className="post_photos" alt="사진2" />
                          </div>
                          <img src="images/Minah/Main/left-chevron.png" className="post_prev btn_size" alt="이전" />
                          <img src="images/Minah/Main/right-chevron.png" className="post_next btn_size" alt="다음" />
                      </div>
                      <div className="post_footer">
                          <div className="post_icons_wrap">
                              <div className="post_icons_box1">
                                  <button className="post_icons_btn"><img src="images/Minah/Main/heart-blank.png"
                                      className="post_icons" alt="하트" />
                                  </button>
                                  <button className="post_icons_btn">
                                      <img src="images/Minah/Main/chat.png" className="post_icons" alt="댓글" />
                                  </button>
                                  <button className="post_icons_btn">
                                      <img src="images/Minah/Main/dm.png" className="post_icons" alt="다이렉트 메시지" />
                                  </button>
                              </div>
                              <div className="post_icons_box2">
                                  <button className="post_icons_btn">
                                      <img src="images/Minah/Main/bookmark_default.png" className="post_icons"
                                          alt="북마크" />
                                  </button>
                              </div>
                          </div>
                          <div className="post_content_wrap">
                              <div className="post_likes">
                                  <p>좋아요 28개</p>
                              </div>
                              <div className="post_content">
                                  <a
                                      href="https://www.instagram.com/lee_heung_yong_cake/">lee_heung_yong_cake</a>
                                  <p>달콤한 크리스마스 쿠키들이 준비되었습니다. 베이커리 각 지점 방문 시 구매할 수 있습니다.</p>
                              </div>
                              <div className="post_reply">
                                  <ul className="reply_wrap"></ul>
                              </div>
                              <div className="post_created_at">
                                  <p>4시간 전</p>
                              </div>
                          </div>
                          <div className="post_reply_wrap">
                              <button className="emoticon_btn">
                                  <img alt="이모티콘" src="images/Minah/Main/smile.png" className="emoticon" />
                              </button>
                              <textarea placeholder="댓글 달기..." className="write_reply"></textarea>
                              <button className="submit_reply" disabled>게시</button>
                          </div>
                      </div>
                  </div>
              </div>
          </article>
          <article>
              <div className="post_wrap">
                  <div className="post_header">
                      <div className="post_account">
                          <img alt="프사" src="images/Minah/Main/profile.jpg" className="post_profile" />
                          <a href="https://www.instagram.com/mina_0120/">my1nsta</a>
                      </div>
                      <button className="post_info">
                          <img alt="더보기" src="images/Minah/Main/option.png" className="post_option" />
                      </button>
                  </div>
                  <div className="post_body">
                      <div className="post_photo_wrap">
                          <div className="post_photo_container">
                              <img alt="사진1"
                                  src="https://images.unsplash.com/photo-1528155124528-06c125d81e89?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=689&q=80"
                                  className="post_photos" />
                          </div>
                      </div>
                      <div className="post_footer">
                          <div className="post_icons_wrap">
                              <div className="post_icons_box1">
                                  <button className="post_icons_btn"><img src="images/Minah/Main/heart-blank.png"
                                      className="post_icons" alt="하트" />
                                  </button>
                                  <button className="post_icons_btn">
                                      <img src="images/Minah/Main/chat.png" className="post_icons" alt="댓글" />
                                  </button>
                                  <button className="post_icons_btn">
                                      <img src="images/Minah/Main/dm.png" className="post_icons" alt="다이렉트 메시지" />
                                  </button>
                              </div>
                              <div className="post_icons_box2">
                                  <button className="post_icons_btn">
                                      <img src="images/Minah/Main/bookmark_default.png" className="post_icons"
                                          alt="북마크" />
                                  </button>
                              </div>
                          </div>
                          <div className="post_content_wrap">
                              <div className="post_likes">
                                  <p>좋아요 39개</p>
                              </div>
                              <div className="post_content">
                                  <a href="https://www.instagram.com/mina_0120/">my1nsta</a>
                                  <p>.<br />aurora night</p>
                              </div>
                              <div className="post_reply"></div>
                              <div className="post_created_at">
                                  <p>6시간 전</p>
                              </div>
                          </div>
                          <div className="post_reply_wrap">
                              <button className="emoticon_btn">
                                  <img alt="이모티콘" src="images/Minah/Main/smile.png" className="emoticon" />
                              </button>
                              <textarea placeholder="댓글 달기..." className="write_reply"></textarea>
                              <button className="submit_reply" disabled>게시</button>
                          </div>
                      </div>
                  </div>
              </div>
          </article>
      </div>
  );
}