import React from 'react';
import './styles/Main.css';
import NewsLine from "../../src/components/NewsLine/NewsLine";
import Paragraph from "../components/Paragraph/Paragraph";
import {pathners, rates, servicesList} from "../data/StaticData";
import BlueButton from "../components/BlueButton/BlueButton";
import ComplexBlock from "../components/Blocks/ComplexBlock/ComplexBlock";

const Main = () => {

    return (
        <div>
            <div className="header">
                <div className="container">
                    <div className="header-content">
                        <h1>Хранение ваших денег в безопасности</h1>
                        <h5>Качественный сервис, качественный учет</h5>
                        <BlueButton width={320} height={50}>Бесплатная консультация</BlueButton>
                    </div>
                    <div className="lowTab">
                        <div className="slider">
                            <div className="slide">
                                {
                                    pathners.map((img) => (
                                        img
                                    ))
                                }
                            </div>
                            <div className="slide">
                                {
                                    pathners.map((img) => (
                                        img
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="description">
                <div className="container">
                    <h1>Нам доверяют бизнес</h1>
                         <div className="description-block row">
                            <p className="col-md-6 description-block__text mb-5">
                                Мы предоставляем услуги по ведению бухгалтерского учета и налогообложению, юридические услуги для частных лиц, компаний малого, среднего и крупного бизнеса, и начинающих свою деятельность предприятий.
                                Также мы специлизируемся на регистрации ООО, ИП, некоммерческих организаций, регистрации изменений в учредительные документы, ликвидации фирм и предпринимателей и вступлении в СРО.
                                Наши эксперты готовы предоставить вам консультации (в том числе БЕСПЛАТНО) по сложным юридическим и бухгалтерским вопросам.
                                Квалифицированные услуги предоставляются в удобном формате для каждого клиента (удаленно, а также взаимодействуя с вами в удобном месте, в подходящее время).
                                Мы предлагаем разные варианты сотрудничества и предоставляем как разовые услуги, так и комплексное обслуживание организаций любых форм собственности от ИП до ОАО.
                            </p>
                            <img className="col-md description-block__picture" src={require('../../src/img/UI/girl.jpg')}/>
                        </div>
                </div>
            </div>

            <div className="services container">
                <Paragraph header="Профессиональные услуги" a="все услуги"/>
                <div className="row services-block">
                    {
                        servicesList.map((service) => (
                            <div className="serviceBlock" style={{background: `${service.bg}`}}>
                                <img className="block-img" src={service.img}/>
                                <p className="block-text">
                                    {service.title}
                                </p>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="container">
                <Paragraph header="Бухгалтерские тарифы" a="все тарифы" path="/service"/>
                <div className="row">
                    {
                            rates.map((rate) =>(
                                <ComplexBlock rates={rate}/>
                            ))
                    }

                </div>
            </div>
            <div className="container mt-5 mb-5">
                <div className="row">
                    <Paragraph header="Информационный ресурс" a="к блогу" path="/blog"/>
                    <NewsLine />
                </div>
            </div>

        </div>
    );
};

export default Main;