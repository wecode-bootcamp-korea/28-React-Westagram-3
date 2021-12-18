import React from 'react';
import { Link } from 'react-router-dom';
import './LoginJongho.scss';
import Footer from '../../../components/Footer/Footer';
import '../../../components/Footer/Footer.scss';
import IdJongho from './Input/IdJongho';
import PwJongho from './Input/PwJongho';

function LoginJongho() {
  return (
    <div class="loginJongho">
      <main class="mainContainer">
        <section>
          <article>
            <div class="outerBox">
              <div class="innerBox">
                <span class="logo">Westagram</span>
                <form>
                  <IdJongho />
                  <PwJongho />
                  <Link to="/mainjongho">
                    <button class="loginBtn">로그인</button>
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
