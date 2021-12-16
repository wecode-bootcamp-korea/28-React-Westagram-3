import React from 'react';
import { Link } from 'react-router-dom';
import './LoginJongho.scss';

function LoginJongho() {
  return (
    <main class="Login">
      <section>
        <article>
          <div class="outerBox">
            <div class="innerBox">
              <span class="logo">Westagram</span>
              <input
                class="email"
                type="text"
                placeholder="전화번호, 사용자 이름 또는 이메일"
              />
              <input class="password" type="password" placeholder="Password" />
              <Link to="/main">
                <button class="loginBtn">로그인</button>
              </Link>
            </div>
          </div>
        </article>
      </section>
    </main>
  );
}

export default LoginJongho;
