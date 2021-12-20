import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './LoginJongho.scss';
import Footer from '../../../components/Footer/Footer';
import '../../../components/Footer/Footer.scss';
import IdJongho from './Input/IdJongho';
import PwJongho from './Input/PwJongho';

function LoginJongho() {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [active, setActive] = useState(false);

  // const loginBtn = document.getElementById('loginBtn');

  const getUserId = userId => {
    setId(userId);
  };

  const getUserPw = userPw => {
    setPw(userPw);
  };

  const valid = () => {
    setActive(id.indexOf('@') !== -1 && pw.length >= 5 ? true : false);
  };

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
                <form onChange={() => valid()}>
                  <IdJongho userId={getUserId} />
                  <PwJongho userPw={getUserPw} />
                  <Link to="/mainjongho">
                    <button className={`${active ? 'active' : ''} loginButton`}>
                      로그인
                    </button>
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
