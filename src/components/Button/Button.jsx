import React from "react";
import "./Button.css"

const Button = (props) => {
    return(
        <button className={props.props.type === 'danger'? "danger" : "secondary"}>{props.props.text}</button>
    );
}

export default Button;