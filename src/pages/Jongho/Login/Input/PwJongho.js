import React, { useState } from 'react';

const PwJongho = () => {
  const [pw, setPw] = useState('');

  function handlePwInput(e) {
    setPw(e.target.value);
  }

  return (
    <div>
      <input
        onChange={e => handlePwInput(e)}
        id="getPassword"
        className="password"
        type="password"
        placeholder="Password"
      />
      <div>{pw}</div>
    </div>
  );
};

export default PwJongho;
