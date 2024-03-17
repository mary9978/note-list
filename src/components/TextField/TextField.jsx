import React from 'react';
import './textfield.css';
function TextField({type,text,value,handleChange}) {
  return (
    <input
    onChange={(e) => handleChange(e.target.value)}
    className="textfield my-1"
    type={type}
    value={value}
    placeholder={text}
    required
  />
  )
}

export default TextField