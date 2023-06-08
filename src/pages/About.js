import React from 'react';
import './styles/About.css';
import Slider from "react-slick";
import Paragraph from "../components/Paragraph/Paragraph";
import {aboutBlock, fakereports} from "../data/StaticData";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faQuoteRight} from "@fortawesome/free-solid-svg-icons";



const About = () => {

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 10000,
        arrows: false,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1.7,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div>
            <div className="header-back">

            </div>
            <div className="container">
                <div className="main-block row">
                    <h3>Почему выбирают именно нас?</h3>
                    {
                        aboutBlock.map((item) => (
                            <div className="about-block col">
                                <p>
                                    {item.text}
                                </p>
                                <img src={item.img}/>
                            </div>
                        ))

                    }
                </div>

                <div className="advantages-block row">
                    <div className="adv-block__row row">
                        <div className="row-text col-md">
                            <h1>
                                Мы в ответе за качество
                            </h1>
                            <p>
                                Ответственность компании закрпеляется в договоре.
                                Если вдруг возникнут ошибки, мы решим всё без вашего участия.
                            </p>
                        </div>
                        <img src={require('../img/UI/about-png1.jpeg')} className="col-xl-7 col-md-12" />
                    </div>
                    <div className="adv-block__row row">
                        <img src={require('../img/UI/about-png2.jpg')} className="col-xl-7 col-md-12" />
                        <div className="row-text col-md">
                            <h1>
                                Экономим ваши деньги
                            </h1>
                            <p>
                                Гораздно выгоднее обратиться к нам за бухгалтерской или юридической помощью,
                                чем нанимать специалиста в штат.
                            </p>
                        </div>
                    </div>
                    <div className="adv-block__row row">
                        <div className="row-text col-md">
                            <h1>
                                Программа лояльности постоянным клиентам
                            </h1>
                            <p>
                                Предоставляем персональные цены на наши услуги для клиентов,
                                находящихся на постоянном обслуживании.
                            </p>
                        </div>
                        <img src={require('../img/UI/about-png3.jpg')} className="col-xl-7 col-md-12" />
                    </div>
                </div>
             </div>
            <div className="reports">
                <Paragraph header="Отзывы о нашей работе"/>
                <Slider {...settings}>
                    {fakereports.map((report) => (
                        <div className="report-block">
                            <img src={report.img} alt=""/>
                            <h4>{report.name}</h4>
                            <h5>{report.title}</h5>
                            <FontAwesomeIcon icon={faQuoteRight} className="quote1"/>
                            <FontAwesomeIcon icon={faQuoteRight} className="quote2"/>
                            <p>
                                {report.report}
                            </p>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default About;