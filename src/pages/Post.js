import React from 'react';
import './styles/Post.css';
import {Link, useLocation} from "react-router-dom";

const Post = () => {
    const location = useLocation();
    console.log(location.state.desc)
    return (
        <div>
            <div className="header-back"/>
            <div className="container mt-5">
                <div className="mb-5 custom-link">
                    <Link to="/blog"><a>Блог /</a></Link>

                    <p>Пост</p>
                </div>
                <div className="block-date">
                    <svg className="date-logo" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.5184 12.6663H1.48136V4.99977H12.5184V12.6663ZM9.963 0V1.33333H4.03708V0H2.5556V1.33333H1.48136C0.659137 1.33333 -0.00012207 1.92667 -0.00012207 2.66667V12.6663C-0.00012207 13.0199 0.155962 13.359 0.433794 13.6091C0.711625 13.8591 1.08845 13.9996 1.48136 13.9996H12.5184C12.9113 13.9996 13.2881 13.8591 13.566 13.6091C13.8438 13.359 13.9999 13.0199 13.9999 12.6663V2.66667C13.9999 1.92667 13.3332 1.33333 12.5184 1.33333H11.4445V0H9.963ZM10.7037 7.66643H7.00004V10.9998H10.7037V7.66643Z" fill="#2D9CDB"/>
                    </svg>
                    <p style={{fontSize: 25}} className="news-block__date">{location.state.date}</p>
                </div>
                <h1 className="row mb-5">{location.state.shortDesc}</h1>
                <img src={require("../img/news/postradavshie_avto1-1-2400x2000.jpg")} className="row" alt=""/>
                <div className="text">
                    <p className="mt-5">{location.state.description}</p>
                </div>
            </div>
        </div>
    );
};

export default Post;