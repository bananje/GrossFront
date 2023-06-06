import React from 'react';
import './NewsLine.css';
import Slider from "react-slick";
import NewsBox from "../Blocks/NewsBox/NewsBox";
import {fakeNews} from "../../data/StaticData";

const NewsLine = () => {

    const PreviousBtn = (props) =>{
        const {className, onClick} = props
        return(
            <div className={className} onClick={onClick}>
                {/*<ArrowForwardIos style={{color: "white"}}/>*/}
            </div>
        )
    }
    const NextBtn = (props) =>{
        const {className, onClick} = props
        return(
            <div className={className} onClick={onClick}>
                {/*<ArrowBackIos style={{color: "white"}}/>*/}
            </div>
        )
    }

    const settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 3,
        initialSlide: 0,
        nextArrow: <PreviousBtn />,
        prevArrow: <NextBtn />,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2.8,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    centerMode: true,
                    slidesToShow: 1.8,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    centerMode: true,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className="Ap">
            <div className="news-slider">
                <Slider {...settings}>
                    {fakeNews.map((item) => (
                        <NewsBox className="block" props={item}>

                        </NewsBox>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default NewsLine;