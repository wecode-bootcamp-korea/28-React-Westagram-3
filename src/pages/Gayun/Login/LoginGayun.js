// eslint-disable

import React, { useRef, useState } from 'react';
import './LoginGayun.scss';
import '../../../components/Footer/Footer.scss';
import '../../../styles/variables.scss';
import Footer from '../../../components/Footer/Footer';
import { useNavigate } from 'react-router';

function LoginGayun() {
  const idRef = useRef();
  const pwRef = useRef();
  const noticeRef = useRef();
  const buttonRef = useRef();
  const [loginInfo, setLoginInfo] = useState({
    id: null,
    password: null,
  });
  const [validState, setValidState] = useState(false);
  const navigate = useNavigate();

  function handleInput() {
    const idInputVal = idRef.current.value;
    const pwInputVal = pwRef.current.value;

    const updatedLoginInfo = {
      id: idInputVal,
      pw: pwInputVal,
    };
    setLoginInfo({ updatedLoginInfo });
    const regex = new RegExp('@');
    const validId = regex.exec(idInputVal);
    if (validId && pwInputVal.length >= 5) {
      setValidState(true);
    } else {
      setValidState(false);
    }
  }

  function goToMain() {
    navigate('/maingayun');
  }

  return (
    <div className="login">
      <div className="container">
        <h1 className="logo">Gestagram</h1>
        <div
          className="form"
          onChange={handleInput}
          onSubmit={() => {
            return false;
          }}
        >
          <div className="input">
            <input
              type="text"
              className="id"
              ref={idRef}
              placeholder="  전화번호, 사용자 이름 또는 이메일"
            />
            <input
              type="password"
              className="password"
              ref={pwRef}
              placeholder="  비밀번호"
            />
          </div>
          <button
            disabled={validState ? false : true}
            ref={buttonRef}
            className={validState ? 'button active' : 'button'}
            onClick={goToMain}
          >
            로그인
          </button>
          {validState ? (
            ''
          ) : (
            <p className="notice" ref={noticeRef}>
              아이디는 @를 포함하고, 비밀번호는 5글자 이상이어야 합니다.
            </p>
          )}
        </div>
        <p className="forgot-password">비밀번호를 잊으셨나요?</p>
        <Footer />
      </div>
    </div>
  );
}

export default LoginGayun;
