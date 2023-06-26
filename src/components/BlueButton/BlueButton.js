import React from 'react';
import './BlueButton.css';
const BlueButton = (props) => {
    return (
        <button type={props.type} onClick={props.onClick} style={{width: props.width, height: props.height}} className="bluebtn">
            {props.children}
        </button>
    );
};

export default BlueButton;