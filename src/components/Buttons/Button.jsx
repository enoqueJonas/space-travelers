import React from 'react'
import './Button.css'
import JoinMissionButton from './JoinMissionButton';
import LeaveMissionButton from './LeaveMissionButton';

const Button = props => {
  const handleClick = target => {
    return props.addHandleClick(target);
  }

  return (
    <>
    {!props.mission.reserved && (
        <JoinMissionButton mission={props.mission} addhandleClick={handleClick}/>
    ) || 
        <LeaveMissionButton mission={props.mission} addhandleClick={handleClick}/>
    }  
    </>
  )
}

export default Button
