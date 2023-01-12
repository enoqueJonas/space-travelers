import React from 'react';
import './Badge.css';
import ActiveMemberBadge from './ActiveMemberBadge';
import NotAMemberBadge from './NotAMemberBadge';

const Badge = (props) => (
    <>
      {(props.mission.reserved && <ActiveMemberBadge />) || <NotAMemberBadge />}
    </>
);

export default Badge;
