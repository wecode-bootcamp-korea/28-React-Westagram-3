import React, { useState } from 'react';

const IdJongho = props => {
  return (
    <div>
      {/* input 이벤트 발생 시, props를 통해 받은 아이디 state 변경 함수를 사용하고, 해당 함수의 인자로 이벤트의 value 값을 전달 */}
      <input
        onChange={event => {
          const { value } = event.target;
          props.getUserId(value);
        }}
        id="inInput"
        className="email"
        type="text"
        placeholder="전화번호, 사용자 이름 또는 이메일"
      />
    </div>
  );
};

export default IdJongho;
