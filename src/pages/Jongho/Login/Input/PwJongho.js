import React from 'react';

const PwJongho = props => {
  return (
    <div>
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
