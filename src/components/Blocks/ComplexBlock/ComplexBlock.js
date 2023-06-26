import React from 'react';
import BlueButton from "../../BlueButton/BlueButton";
import './ComplexBlock.css';

const ComplexBlock = (props) => {

    const servicesList = props.rates.serviceList.map((rate) =>(
        <li><img className="rate-mark" src={require('../../../img/marks/mark.png')}/>{rate}</li>
    ))

    return (
        <div className="complex-block col-md">
            <div className="complex-block-elements">
                <h3 className="complex-block__name">{props.rates.name}</h3>
                <h1 className="complex-block__price">{props.rates.price}</h1>
                <ul className="element-list">
                    {servicesList}
                </ul>
            </div>
        </div>
    );
};

export default ComplexBlock;