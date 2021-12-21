import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../../../components/Footer/Footer';
import '../../../styles/reset.scss';
import '../../../styles/common.scss';
import './LoginMinah.scss';

export default function LoginMinah() {
  const [userId, setUserId] = useState('');
  const [userPw, setUserPw] = useState('');

  const handleIdInput = e => {
    const uId = e.target.value;
    setUserId(uId);
    sessionStorage.setItem('userId', userId.split('@')[0]);
  };

  const handlePwInput = e => {
    setUserPw(e.target.value);
  };

  const navigate = useNavigate();
  const goToMain = () => {
    navigate('/mainminah');
  };

  const onReset = () => {
    setUserId('');
    setUserPw('');
    goToMain();
  };

  const enterKeyEvent = e => {
    if (e.key === 'Enter') {
      onReset();
    }
  };

  return (
    <div className="login_minah">
      <main>
        <div className="login_box">
          <h1>Westagram</h1>
          <form onKeyPress={e => enterKeyEvent(e)}>
            <div className="login_input">
              <input
                type="text"
                id="user_id"
                placeholder="전화번호, 사용자 이름 또는 이메일"
                onChange={handleIdInput}
                value={userId}
              />
              <label htmlFor="user_id">전화번호, 사용자 이름 또는 이메일</label>
            </div>
            <div className="login_input">
              <input
                type="password"
                id="user_pw"
                placeholder="비밀번호"
                onChange={handlePwInput}
                value={userPw}
                autoComplete="on"
              />
              <label htmlFor="user_pw">비밀번호</label>
            </div>
            <button
              type="button"
              onClick={onReset}
              disabled={
                userId.includes('@') && userPw.length > 5 ? false : true
              }
            >
              로그인
            </button>
          </form>
          <div className="line">
            <span>또는</span>
          </div>
          <div className="facebook">
            <a href="https://www.facebook.com/">
              <img
                alt="페이스북 아이콘"
                src="images/Minah/Login/facebook.png"
              />
              <span>Facebook으로 로그인</span>
            </a>
          </div>
          <div className="find_pw">
            <a href="https://www.instagram.com/accounts/password/reset/">
              비밀번호를 잊으셨나요?
            </a>
          </div>
        </div>
        <div className="go_to_join">
          <p>
            계정이 없으신가요?{' '}
            <a
              href="https://www.instagram.com/accounts/emailsignup/"
              target="_self"
            >
              가입하기
            </a>
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
