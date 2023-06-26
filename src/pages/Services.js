import React from 'react';
import './styles/Services.css';
import {advantages} from "../data/StaticData";
import {Link, NavLink, Route, Routes} from "react-router-dom";



const Services = () => {

    return (
        <div className="page">
            <div className="page-header row">
                <h1>Профессиональные услуги для вашего бизнеса</h1>
            </div>

            <div className="container">
                <div className="row mx-auto">
                    <h3>Гросс предлагает Вам:</h3>
                    {
                        advantages.map((adv) => (
                            <div className="advantage-block col-xl-4 col-md-2">
                                <img className="block-logo" src={adv.img}/>
                                <p>{adv.text}</p>
                                <img className="block-number" src={adv.number}/>
                            </div>
                        ))
                    }
                </div>
                <div className="row pt-5 mx-auto">
                    <h2>Наши услуги</h2>
                    <div className="banner col-lg-12">
                        <div className="banner-block-1">
                            <img src={require('../img/UI/business.png')} />
                            <p>Бухгалтерские услуги</p>
                            <Link to="servicelist" state={true}>
                                    <button className="btn">
                                        Подробнее
                                    </button>
                            </Link>
                        </div>
                        <div className="banner-block-2">
                            <img src={require('../img/UI/lawyer.png')} />
                            <p>Юридические услуги</p>
                            <Link to="servicelist" state={false}>
                                <button className="btn">
                                     Подробнее
                                 </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;