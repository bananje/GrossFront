import React from 'react';
import './Card.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";

const Card = (props) => {
    return (
        <div className="container card-main">
            <div className="card-block">
                <h3>{props.title}</h3>
                <div className="card-block__category">
                    <h5>{props.category}</h5>
                </div>
                <div className="card-block__price">
                    <h5>от {props.price}</h5>
                </div>
            </div>
            <FontAwesomeIcon className="icon-plus" icon={faPlus} size="xl" style={{color: "#000000",}} />
        </div>
    );
};

export default Card;