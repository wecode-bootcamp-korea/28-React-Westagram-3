import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './LoginJongho.scss';
import Footer from '../../../components/Footer/Footer';
import '../../../components/Footer/Footer.scss';
import IdJongho from './Input/IdJongho';
import PwJongho from './Input/PwJongho';

function LoginJongho() {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const loginBtn = document.getElementById('loginBtn');

  const getUserId = userId => {
    setId(userId);
  };
  const getUserPw = userPw => {
    setPw(userPw);
  };

  const valid = () => {
    return id.indexOf('@') !== -1 && pw.length >= 5
      ? loginBtn.setAttribute('style', 'background-color: rgba(0, 149, 246, 1)')
      : loginBtn.setAttribute(
          'style',
          'background-color: rgba(0, 149, 246, 0.3)'
        );
  };

  return (
    <div class="loginJongho">
      <main class="mainContainer">
        <section>
          <article>
            <div class="outerBox">
              <div class="innerBox">
                <span class="logo">Westagram</span>
                <form onChange={event => valid()}>
                  <IdJongho userId={getUserId} />
                  <PwJongho userPw={getUserPw} />
                  <Link to="/mainjongho">
                    <button id="loginBtn">로그인</button>
                  </Link>
                  <div>{id}</div>
                  <div>{pw}</div>
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
