// export default function LoginHojin() {

// }
import React from 'react';
// import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './LoginHojin.scss';
// const [pageMove, setPageMove] = useState('');

function LoginHojin() {
  const onChange = e => {
    console.log(e.target.value);
  };
  return (
    <div className="container">
      <h1>Westagram</h1>
      <div className="form">
        <input
          type="text"
          id="inputId"
          placeholder="전화번호, 사용자 이름 또는 이메일"
          onChange={onChange}
        />
        <input
          type="text"
          id="inputPw"
          placeholder="비밀번호"
          onChange={onChange}
        />
        <Link to="/MainHojin">
          <button>로그인</button>
        </Link>
      </div>
      <div className="pwSearch">
        <span>비밀번호를 잊으셨나요?</span>
      </div>
    </div>
  );
}

export default LoginHojin;

{
  /* <div className="container">
      <div className="header">
        <h1>
          <span className="topLogo" />
          <span>Westagram</span>
        </h1>
      </div>

      <div className="form">
        <div className="inputBoxId">
          <input
            className="input_id"
            id="id"
            type="text"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            // onChange={updateEmail}
          />
        </div>

        <div className="inputBoxPw">
          <input
            className="input_pw"
            id="pw"
            type="password"
            placeholder="비밀번호"
          />
        </div>

        <div className="buttonBox">
          <Link to="/main">
            <button className="btnOn btnOff">로그인</button>
          </Link>
        </div>

        <div className="searchPwd">
          <span>비밀번호를 잊으셨나요?</span>
        </div>
      </div>
    </div> */
}
