import React, {useState} from 'react';
import './Authorization.css';
import BlueButton from "../BlueButton/BlueButton";
import axios from "axios";
import jwt_decode from 'jwt-decode';
import ValidationText from "../ValidationText/ValidationText";

const Authorization = (props) => {

    const [validation, setValidation] = useState(false);
    const [error, setError] = useState('');
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    function modalClose() {
        props.modalHandle(false);
    }
    async function authorizeHandle(){
        if(login === '' || password === ''){
            setValidation(true)
            setError('Заполните все обязательные поля!')
            return;
        }

        let authData = {
            userName: login,
            password: password
        }

      await axios.post('https://localhost:7224/api/User/login',  authData,{
            headers:{
                'Content-Type': 'application/json'
            }
        })
            .then(response => {
                localStorage.setItem("token", response.data.token)
                const userRole = jwt_decode(response.data.token).role;
                localStorage.setItem('role', userRole)
                props.isAuthorize(true,userRole);
                setPassword('')
                setLogin('')
            })
            .catch(error => {
                let status = error.response.status;
                if(status === 400){
                    setValidation(true)
                    setError('Неверный логин или пароль!')
                }
            });
    }
    return (
        <div className="auth-window">
            <div className="container">
                <h1>Авторизация</h1>
                <div className="picture">
                    <img src={require('../../img/UI/authreg.png')} />
                </div>
                <input value={login} onChange={e => setLogin(e.target.value)} onInput={() => setValidation(false)} placeholder="Имя пользователя"/><br/>
                <input value={password} onChange={e => setPassword(e.target.value)} onInput={() => setValidation(false)} type="password" placeholder="Пароль"/><br/>
                {validation ? (<ValidationText text={error} />) : (<div></div>)}
                <BlueButton  onClick={authorizeHandle} width={200}>Войти</BlueButton><br/><br/>
                <a onClick={modalClose}>Нет аккаунта? Зарегистрируйтесь!</a>
            </div>
        </div>
    );
};

export default Authorization;