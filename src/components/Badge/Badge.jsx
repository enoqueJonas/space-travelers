import React from "react";
import "./Badge.css";

const Badge = (props) => {
    return(
        <div className={props.props.type === 'active-member'? "active-member" : "not-active-member"}>{props.props.text}</div>
    );
}

export default Badge;