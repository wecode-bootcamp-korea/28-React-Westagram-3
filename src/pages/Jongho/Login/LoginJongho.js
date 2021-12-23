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
  const [user, setUser] = useState({
    id: '',
    pw: '',
    // 이거 객체 형태로 저장해서 id랑 pw 따로 state로 관리하지 말것.!!!!
  });
  // const [pw, setPw] = useState('');
  const [active, setActive] = useState(false);

  function handleUser(event) {
    const { name, value } = event.target;

    setUser({ ...user, [name]: value });
  }

  //객체 계산된 속성명
  // const temp = 'jongho'
  // const obj = {
  //   name: 'jongho',
  //   age: 30,
  //   [변수 + 숫자] :
  //   밑으로는 반복되는 특성 추가 for_loop으로 할 수 있다
  // }

  // 유효성 검사 함수. 결과는 active state의 값으로 저장되고, 저장된 state 값은 로그인 버튼의 className으로 사용되어, className에 따라 적용되는 scss 특성 변화. 로그인 버튼 활성화

  // 아이디, 비밀번호 저장 state가 변할 때 마다 유효성 검사 실행
  let validation =
    user.id.includes('@') !== -1 && user.pw.length >= 5 ? true : false;
  console.log(validation);
  // const postAccount = isItRight => {
  //   // if (isItRight) {
  //   fetch('http://10.58.3.188:8000/users/login', {
  //     method: 'POST',
  //     body: JSON.stringify({
  //       username: '윤종호',
  //       email: id,
  //       password: pw,
  //       phone_number: '010-1234-5679',
  //       date_of_birth: '1997-07-07',
  //     }),
  //   })
  //     .then(response => response.json())
  //     .then(result => console.log('결과:', result));
  // };

  return (
    <div className="loginJongho">
      <main className="mainContainer">
        <section>
          <article>
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
                  >
                    로그인
                  </button>
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
