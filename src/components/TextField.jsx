import React from 'react';
function TextField({type,text,value,handleChange}) {
  return (
    <input
    onChange={(e) => handleChange(e.target.value)}
    className="textfield rounded-md  p-1 my-1"
    type={type}
    value={value}
    placeholder={text}
    required
  />
  )
}

export default TextField