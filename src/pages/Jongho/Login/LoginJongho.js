import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginJongho.scss';
import Footer from '../../../components/Footer/Footer';
import '../../../components/Footer/Footer.scss';
import IdJongho from './Input/IdJongho';
import PwJongho from './Input/PwJongho';

export default LoginJongho;

function LoginJongho() {
  const [user, setUser] = useState({
    id: '',
    pw: '',
  });

  const navigate = useNavigate();

  const goToMain = () => {
    navigate('/mainjongho');
  };

  function handleUser(event) {
    const { name, value } = event.target;

    setUser({ ...user, [name]: value });
  }

  // 아이디, 비밀번호 저장 state가 변할 때 마다 유효성 검사 실행
  let validation =
    user.id.includes('@') !== -1 && user.pw.length >= 5 ? true : false;

  const submitUserInfo = () => {
    fetch('백엔드 서버 주소', {
      method: 'POST',
      body: JSON.stringify({
        username: '윤종호',
        email: user.id,
        password: user.pw,
        phone_number: '010-1234-5679',
        date_of_birth: '1997-07-07',
      }),
    })
      .then(response => response.json())
      .then(result => {
        console.log('결과:', result);
        goToMain();
      });
  };

  return (
    <div className="loginJongho">
      <main className="mainContainer">
        <div className="outerBox">
          <div className="innerBox">
            <span className="logo">Westagram</span>
            <form>
              <IdJongho handleUser={handleUser} />
              <PwJongho handleUser={handleUser} />
              <button
                className={`${validation ? 'active' : ''} loginButton`}
                // onClick={() => postAccount(active)}
                type="button"
                onClick={submitUserInfo}
              >
                로그인
              </button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
