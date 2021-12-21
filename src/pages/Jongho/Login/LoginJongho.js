import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './LoginJongho.scss';
import Footer from '../../../components/Footer/Footer';
import '../../../components/Footer/Footer.scss';
import IdJongho from './Input/IdJongho';
import PwJongho from './Input/PwJongho';
// westagram 로그인 페이지의 최상위 컴포넌트

// IdJongho, PwJongho 컴포넌트로 부터 아이디와 비밀번호 값을 받아와서 유효성 검사 실행

// 받아온 아이디는 state에 저장하여 관리

// 유효성 검사 결과를 state로 관리하여 state 값에 따라 로그인 버튼 활성화/비활성화

function LoginJongho() {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [active, setActive] = useState(false);

  //getUserId 함수를 IdJongho 컴포넌트로 넘겨 아이디 input에 입력된 값을 인자로 받아 setState 함수 실행
  const getUserId = userId => {
    setId(userId);
  };
  // getUserPw 함수와 상동
  const getUserPw = userPw => {
    setPw(userPw);
  };
  // 유효성 검사 함수. 결과는 active state의 값으로 저장되고, 저장된 state 값은 로그인 버튼의 className으로 사용되어, className에 따라 적용되는 scss 특성 변화. 로그인 버튼 활성화
  const valid = () => {
    setActive(id.includes('@') !== -1 && pw.length >= 5 ? true : false);
  };
  // 아이디, 비밀번호 저장 state가 변할 때 마다 유효성 검사 실행
  useEffect(() => {
    valid();
  }, [id, pw]);

  return (
    <div class="loginJongho">
      <main class="mainContainer">
        <section>
          <article>
            <div class="outerBox">
              <div class="innerBox">
                <span class="logo">Westagram</span>
                <form>
                  <IdJongho getUserId={getUserId} />
                  <PwJongho getUserPw={getUserPw} />
                  <Link to="/mainjongho">
                    {/* 로그인 버튼 동적 className */}
                    <button className={`${active ? 'active' : ''} loginButton`}>
                      로그인
                    </button>
                  </Link>
                </form>
              </div>
            </div>
          </article>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default LoginJongho;
