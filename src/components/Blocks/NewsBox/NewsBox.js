import React, {useState} from 'react';
import './NewsBox.css'
import BlueButton from "../../BlueButton/BlueButton";
import Modal from "../../Modal/Modal";
import {Link} from "react-router-dom";

const NewsBox = ({props, button}) => {

    const state = {
        date: props.date,
        head: props.head,
        content: props.content,
        img: props.img
    };

    return (
        <div className="news-block">
            <img className="news-block__picture" src={props.img}/>
            <div className="news-block__container">
                <div className="block-date">
                    <svg className="date-logo" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.5184 12.6663H1.48136V4.99977H12.5184V12.6663ZM9.963 0V1.33333H4.03708V0H2.5556V1.33333H1.48136C0.659137 1.33333 -0.00012207 1.92667 -0.00012207 2.66667V12.6663C-0.00012207 13.0199 0.155962 13.359 0.433794 13.6091C0.711625 13.8591 1.08845 13.9996 1.48136 13.9996H12.5184C12.9113 13.9996 13.2881 13.8591 13.566 13.6091C13.8438 13.359 13.9999 13.0199 13.9999 12.6663V2.66667C13.9999 1.92667 13.3332 1.33333 12.5184 1.33333H11.4445V0H9.963ZM10.7037 7.66643H7.00004V10.9998H10.7037V7.66643Z" fill="#2D9CDB"/>
                    </svg>
                    <p className="news-block__date">{props.date}</p>
                </div>
                <div className="news-block__header">
                    <p>{props.head}</p>
                </div>
                <div className="news-block__content">
                    {props.content}
                </div>
                <Link to="blog/post" state={state}><BlueButton>Посмотреть</BlueButton></Link>
            </div>
        </div>
    );
};

export default NewsBox;