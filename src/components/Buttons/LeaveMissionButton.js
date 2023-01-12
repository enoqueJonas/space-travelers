import React from 'react';
import './Button.css';

const LeaveMissionButton = (props) => {
  const handleClick = (e) => {
    props.addhandleClick(e.target);
  };

  return (
    <button
      className='danger'
      id={props.mission.id}
      onClick={handleClick}
    >
      Leave Mission
    </button>
  );
};

export default LeaveMissionButton;