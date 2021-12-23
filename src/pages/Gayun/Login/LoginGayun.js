// eslint-disable

import React, { useRef, useState } from 'react';
import './LoginGayun.scss';
import '../../../components/Footer/Footer.scss';
import '../../../styles/variables.scss';
import Footer from '../../../components/Footer/Footer';
import { useNavigate } from 'react-router';

function LoginGayun() {
  const emailRef = useRef();
  const pwRef = useRef();
  const mobileRef = useRef();
  const nameRef = useRef();
  const idRef = useRef();

  const noticeRef = useRef();
  const buttonRef = useRef();

  const [loginInfo, setLoginInfo] = useState({
    id: null,
    password: null,
  });
  const [validState, setValidState] = useState(false);
  const navigate = useNavigate();

  function handleInput() {
    const emailInputVal = emailRef.current.value;
    const pwInputVal = pwRef.current.value;
    const mobileinputVal = mobileRef.current.value;
    const nameInputVal = nameRef.current.value;
    const idInputVal = idRef.current.value;

    const updatedLoginInfo = {
      email: emailInputVal,
      password: pwInputVal,
      mobile: mobileinputVal,
      name: nameInputVal,
      id: idInputVal,
    };
    setLoginInfo(updatedLoginInfo);
    const regex = new RegExp('@');
    const validId = regex.exec(emailInputVal);
    if (validId && pwInputVal.length >= 5) {
      setValidState(true);
    } else {
      setValidState(false);
    }
  }

  function goToMain() {
    navigate('/maingayun');
  }

  async function signUp() {
    const response = await fetch('http://10.58.0.88:8000/users/signup', {
      method: 'POST',
      body: JSON.stringify({
        email: loginInfo.email,
        password: loginInfo.password,
        mobile: loginInfo.mobile,
        user_name: loginInfo.name,
        user_id: loginInfo.id,
      }),
    });
    goToMain();
  }

  return (
    <div className="login-gayun">
      <div className="container">
        <h1 className="logo">Gestagram</h1>
        <div className="form" onChange={handleInput}>
          <div className="input">
            <input
              type="text"
              className="login-input"
              ref={emailRef}
              placeholder="  이메일"
            />
            <input
              type="password"
              className="login-input"
              ref={pwRef}
              placeholder="  비밀번호"
            />
            <input
              ref={mobileRef}
              type="text"
              className="login-input"
              placeholder="  휴대폰 번호"
            />
            <input
              ref={nameRef}
              type="text"
              className="login-input"
              placeholder="  이름"
            />
            <input
              ref={idRef}
              className="login-input"
              type="text"
              placeholder="  아이디"
            />
          </div>
          <button
            disabled={validState ? false : true}
            ref={buttonRef}
            className={validState ? 'button active' : 'button'}
            onClick={signUp}
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
