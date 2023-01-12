import React from 'react'
import './Button.css'

const Button = props => {
  const handleClick = e => {
    props.addhandleClick(e.target)
  }

  return (
    <button
      className={props.props.type === 'danger' ? 'danger' : 'secondary'}
      id={props.id}
      onClick={handleClick}
    >
      {props.props.text}
    </button>
  )
}

export default Button
