import React, { useState } from 'react';

const PwJongho = props => {
  return (
    <div>
      <input
        onChange={event => props.userPw(event.target.value)}
        id="pwInput"
        className="password"
        type="password"
        placeholder="Password"
      />
    </div>
  );
};

export default PwJongho;
