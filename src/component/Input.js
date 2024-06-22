

import React from 'react'

const Input = ({handleChange, value, title, name, color, id }) => {
  return (
    <div>
      <label  className="sidebar-label-container">
        <input onChange={handleChange} type="radio" name={name} value={value} id={id} />
        <span className="checkmark" style={{backgroundColor: color }} ></span>{title}
      </label>
    </div>
  )
}

export default Input
