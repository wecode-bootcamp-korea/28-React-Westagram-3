import './Story.scss';

export default function Story() {
  return (
    <div className="story_box">
      <div className="story_wrap">
        <img
          alt="이전"
          src="images/Minah/Main/left-chevron.png"
          className="story_prev btn_style"
        />
        <img
          alt="다음"
          src="images/Minah/Main/right-chevron.png"
          className="story_next btn_style"
        />
        <ul className="story">
          <li className="story_list">
            <div className="story_border story_old_border">
              <img
                alt="내 스토리"
                src="images/Minah/Main/profile.jpg"
                className="story_profile"
              />
            </div>
            <p className="story_old_color">Your story</p>
          </li>
          <li className="story_list">
            <div className="story_border story_new_border">
              <img
                alt="이흥용 과자점 스토리"
                src="images/Minah/Main/profile1.jpg"
                className="story_profile"
              />
            </div>
            <p className="story_new_color">lee_heung_yong_cake</p>
          </li>
          <li className="story_list">
            <div className="story_border story_old_border">
              <img
                alt="고양이러버 스토리"
                src="images/Minah/Main/cat.jpg"
                className="story_profile"
              />
            </div>
            <p className="story_old_color">cat_lover</p>
          </li>
          <li className="story_list">
            <div className="story_border story_old_border">
              <img
                alt="카페 스토리"
                src="images/Minah/Main/coffee.jpg"
                className="story_profile"
              />
            </div>
            <p className="story_old_color">cafe_knotted</p>
          </li>
          <li className="story_list">
            <div className="story_border story_old_border">
              <img
                alt="여행 스토리"
                src="images/Minah/Main/profile2.jpg"
                className="story_profile"
              />
            </div>
            <p className="story_old_color">crazy_for_travel</p>
          </li>
          <li className="story_list">
            <div className="story_border story_old_border">
              <img
                alt="스타벅스 스토리"
                src="images/Minah/Main/starbucks.jpg"
                className="story_profile"
              />
            </div>
            <p className="story_old_color">starbucks_korea</p>
          </li>
          <li className="story_list">
            <div className="story_border story_old_border">
              <img
                alt="문구 스토리"
                src="images/Minah/Main/stationary.jpg"
                className="story_profile"
              />
            </div>
            <p className="story_old_color">stationary_store</p>
          </li>
          <li className="story_list">
            <div className="story_border story_old_border">
              <img
                alt="애플 스토리"
                src="images/Minah/Main/macbook.jpg"
                className="story_profile"
              />
            </div>
            <p className="story_old_color">apple_store_kr</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
