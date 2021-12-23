import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './LoginHojin.scss';

function LoginHojin() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  function handleIdInput(event) {
    setId(event.target.value);
  }

  function handlePwInput(event) {
    setPassword(event.target.value);
  }

  const [isActive, setIsActive] = useState(false);

  const isPassedLogin = e => {
    return id.includes('@') && password.length > 4
      ? setIsActive(true)
      : setIsActive(false);
  };

  const user = () => {
    console.log('user 함수');
    fetch('https://westagram-signup.herokuapp.com/login', {
      method: 'POST',
      body: JSON.stringify({
        email: id,
        password: password,
      }),
    })
      .then(response => response.json())
      .then(result => console.log('결과: ', result));
  };

  return (
    <div className="wrap">
      <div className="container">
        <h1>Westagram</h1>
        <div className="form">
          <input
            type="email"
            id="inputId"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            onChange={handleIdInput}
            onKeyUp={isPassedLogin}
          />
          <input
            type="password"
            id="inputPw"
            placeholder="비밀번호"
            onChange={handlePwInput}
            onKeyUp={isPassedLogin}
          />
          <Link to="/MainHojin">
            <button
              type="button"
              className={isActive ? 'btnOn' : 'btnOff'}
              onClick={user}
            >
              로그인
            </button>
          </Link>
        </div>
        <div className="pwSearch">
          <span>비밀번호를 잊으셨나요?</span>
        </div>
      </div>
      <footer>
        <div className="footer_tags_wrap">
          <ul>
            <li>
              <a href="https://wecode.co.kr/">Wecode</a>
            </li>
            <li>
              <span>소개</span>
            </li>
            <li>
              <span>블로그</span>
            </li>
            <li>
              <span>채용 정보</span>
            </li>
            <li>
              <span>도움말</span>
            </li>
            <li>
              <span>API</span>
            </li>
            <li>
              <span>개인정보처리방침</span>
            </li>
            <li>
              <span>약관</span>
            </li>
            <li>
              <span>인기 계정</span>
            </li>
            <li>
              <span>해시태그</span>
            </li>
            <li>
              <span>위치</span>
            </li>
            <li>
              <span>Westagram Lite</span>
            </li>
          </ul>
        </div>
        <div className="copyright">
          <p>&copy; 2021 WESTAGRAM FROM WECODE 28TH</p>
        </div>
      </footer>
    </div>
  );
}

export default LoginHojin;
