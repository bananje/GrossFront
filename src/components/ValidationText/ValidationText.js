import React from 'react';
import './ValidationText.css';

const ValidationText = (props) => {
    return (
        <p className="validation">
            {props.text}
        </p>
    );
};

export default ValidationText;