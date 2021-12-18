import React, { useState } from 'react';

const IdJongho = props => {
  let [id, setId] = useState('');

  function handleIdInput(e) {
    setId(e.target.value);
  }

  return (
    <div>
      <input
        onChange={e => handleIdInput(e)}
        id="getId"
        className="email"
        type="text"
        placeholder="전화번호, 사용자 이름 또는 이메일"
      />
      <div>{id}</div>
    </div>
  );
};

export default IdJongho;
