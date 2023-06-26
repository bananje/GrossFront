import React from 'react';
import './Modal.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faXmark} from "@fortawesome/free-solid-svg-icons";

const Modal = (props) => {

    function modalClose(){
        props.setActive(false)
        props.clearData(false)
    }

    return (
        <div className={props.active ? "modal active" : "modal"} onClick={() => props.setActive(false)}>
            <div className={props.active ? "modal__content active" : "modal__content"} onClick={e => e.stopPropagation()}>
                <FontAwesomeIcon icon={faXmark} className="close-icon" size="xl" onClick={() => modalClose()}/>
                {props.children}
            </div>
        </div>
    );
};

export default Modal;