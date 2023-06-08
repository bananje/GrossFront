import React from 'react';
import './Authorization.css';
import BlueButton from "../BlueButton/BlueButton";

const Authorization = (props) => {
    function modalClose() {
        props.modalHandle(false);
    }
    function authorizeHandle(){
        props.isAuthorize(true);
    }
    return (
        <div className="auth-window">
            <div className="container">
                <h1>Авторизация</h1>
                <div className="picture">
                    <img src={require('../../img/UI/authreg.png')} />
                </div>
                <input placeholder="Имя пользователя"/><br/>
                <input type="password" placeholder="Пароль"/><br/>
                <BlueButton onClick={authorizeHandle} width={200}>Войти</BlueButton><br/><br/>
                <a onClick={modalClose}>Нет аккаунта? Зарегистрируйтесь!</a>
            </div>
        </div>
    );
};

export default Authorization;