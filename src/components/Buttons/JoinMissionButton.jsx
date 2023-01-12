import React from 'react'
import './Button.css'

const JoinMissionButton = props => {
  const handleClick = e => {
    props.addhandleClick(e.target)
  }

  return (
    <button
      className='secondary'
      id={props.mission.id}
      onClick={handleClick}
    >
      Join Mission
    </button>
  )
}


export default JoinMissionButton;