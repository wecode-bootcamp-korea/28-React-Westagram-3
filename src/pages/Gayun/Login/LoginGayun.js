import React, { useRef, useState } from 'react';
import './LoginGayun.scss';
import '../../../components/Footer/Footer.scss';
import '../../../styles/variables.scss';
import Footer from '../../../components/Footer/Footer';

function LoginGayun() {
  const idRef = useRef();
  const pwRef = useRef();
  const noticeRef = useRef();
  const [loginInfo, setLoginInfo] = useState({
    id: null,
    password: null,
  });
  const [validState, setValidState] = useState(true);

  function handleInput() {
    const idInputVal = idRef.current.value;
    const pwInputVal = pwRef.current.value;

    const updatedLoginInfo = {
      id: idInputVal,
      pw: pwInputVal,
    };
    setLoginInfo({ updatedLoginInfo });
    console.log(updatedLoginInfo);
    const regex = new RegExp('@');
    const validId = regex.exec(idInputVal);
    if (validId && pwInputVal.length >= 5) {
      setValidState(true);
    } else {
      setValidState(false);
    }
  }

  return (
    <div className="login">
      <div className="container">
        <h1 className="logo">Westagram</h1>
        <form className="form" onChange={handleInput}>
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
          <button className="button">로그인</button>
          {validState ? (
            ''
          ) : (
            <p className="notice" ref={noticeRef}>
              아이디는 @를 포함하고, 비밀번호는 5글자 이상이어야 합니다.
            </p>
          )}
        </form>
        <p className="forgot-password">비밀번호를 잊으셨나요?</p>
        <Footer />
      </div>
    </div>
  );
}

export default LoginGayun;
