import React, { useState } from 'react';

const IdJongho = props => {
  return (
    <div>
      <input
        onChange={event => props.userId(event.target.value)}
        id="inInput"
        className="email"
        type="text"
        placeholder="전화번호, 사용자 이름 또는 이메일"
      />
    </div>
  );
};

export default IdJongho;
