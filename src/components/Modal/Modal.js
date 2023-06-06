import React from 'react';
import './Modal.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faXmark} from "@fortawesome/free-solid-svg-icons";

const Modal = ({active, setActive, children}) => {
    return (
        <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
            <div className={active ? "modal__content active" : "modal__content"} onClick={e => e.stopPropagation()}>
                <FontAwesomeIcon icon={faXmark} className="close-icon" size="xl" onClick={() => setActive(false)}/>
                {children}
            </div>
        </div>
    );
};

export default Modal;