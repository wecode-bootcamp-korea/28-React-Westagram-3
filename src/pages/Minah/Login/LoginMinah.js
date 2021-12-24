import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../../../components/Footer/Footer';
import '../../../styles/reset.scss';
import '../../../styles/common.scss';
import './LoginMinah.scss';

export default function LoginMinah() {
  // useRef로도 관리 가능하며, useRef는 값이 바뀌어도 렌더링되지 않음
  const [userInputs, setUserInputs] = useState({ userId: '', userPw: '' });

  const handleInputs = e => {
    const { name, value } = e.target;
    setUserInputs({ ...userInputs, [name]: value });
    sessionStorage.setItem('userId', userInputs.userId.split('@')[0]);
  };

  const navigate = useNavigate();
  const goToMain = () => {
    navigate('/mainminah');
  };

  const submitLoginInfo = () => {
    // 백엔드랑 로그인할 때
    // fetch('http://10.58.4.57:8000/user/login', {
    //   method: 'POST',
    //   body: JSON.stringify({
    //     email: userInputs.userId,
    //     password: userInputs.userPw,
    //   }),
    // })
    //   .then(res => res.json())
    //   .then(result => {
    //     if (result.success) {
    //       sessionStorage.setItem('token', result);
    //       goToMain();
    //     }
    //   });
    goToMain();
  };

  const handleLoginEvent = e => {
    if (e.key === 'Enter') {
      submitLoginInfo();
    }
  };

  const isInputsValid =
    userInputs.userId.includes('@') && userInputs.userPw.length > 5;

  return (
    <div className="login_minah">
      <main>
        <div className="login_box">
          <h1>Westagram</h1>
          <form onKeyPress={handleLoginEvent}>
            <div className="login_input">
              <input
                type="text"
                id="user_id"
                placeholder="전화번호, 사용자 이름 또는 이메일"
                onChange={handleInputs}
                name="userId"
              />
              <label htmlFor="user_id">전화번호, 사용자 이름 또는 이메일</label>
            </div>
            <div className="login_input">
              <input
                type="password"
                id="user_pw"
                placeholder="비밀번호"
                onChange={handleInputs}
                name="userPw"
                autoComplete="on"
              />
              <label htmlFor="user_pw">비밀번호</label>
            </div>
            <button
              type="button"
              onClick={submitLoginInfo}
              disabled={!isInputsValid}
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
