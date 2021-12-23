import React from 'react';

const PwJongho = props => {
  return (
    <div>
      {/* input 이벤트 발생 시, props를 통해 받은 아이디 state 변경 함수를 사용하고, 해당 함수의 인자로 이벤트의 value 값을 전달 */}
      <input
        name="pw"
        onChange={props.handleUser}
        id="pwInput"
        className="password"
        type="password"
        placeholder="Password"
      />
    </div>
  );
};

export default PwJongho;
