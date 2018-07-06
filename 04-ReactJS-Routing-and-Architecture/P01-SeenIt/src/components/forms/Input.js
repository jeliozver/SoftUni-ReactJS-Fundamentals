import React from 'react';

const Input = (props) => {
  return (
    <input
      type={props.type}
      name={props.name}
      value={props.value}
      onChange={(e) => props.func(e)}
    />
  );
};

export default Input;