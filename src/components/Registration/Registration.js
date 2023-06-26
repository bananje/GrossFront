import React, {useState} from 'react';
import './Registration.css';
import BlueButton from "../BlueButton/BlueButton";
import {Checkbox, FormControlLabel} from "@mui/material";
import axios from "axios";
import Modal from "../Modal/Modal";
import ValidationText from "../ValidationText/ValidationText";

const Registration = (props) => {

    const [validation, setValidation] = useState(false);
    const [error, setError] = useState('');
    const [fio, setFio] = useState([]);
    const [data, setData] = useState({
        userName: '',
        email: '',
        phoneNumber: '',
        password: ''
    });
    async function registrationHandle() {

        let FIO = {
            surname: fio[0],
            name: fio[1],
            patronymic: fio[2]
        }
        const regData = Object.assign({},FIO, data)

        await axios.post('https://localhost:7224/api/User/register',  regData,{
            headers:{
                'Content-Type': 'application/json'
            }
        })
            .then(response => {
               props.regHandle(true)
            })
            .catch(error => {
                console.log(error.response.status)
                let status = error.response.status;
                if(status === 404){
                    setValidation(true);
                    setError('Заполнены не все обязательные поля!');
                }
                if (status === 400){
                    setValidation(true);
                    setError('Введены некорректные данные или такой пользователь уже существует');
                }
            });
    }
    return (
        <div className="reg-window">
            <div className="container">
                <h1>Регистрация</h1>
                <div className="picture">
                    <img src={require('../../img/UI/regIcon.png')} />
                </div>
                <div className="inputs">
                    <input onChange={(e) =>  setFio(e.target.value.split(' '))} placeholder="ФИО"/><br/>
                    <input onChange={e => setData({...data, email: e.target.value})} placeholder="Электронная почта"/><br/>
                    <input onChange={(e) => setData({...data, phoneNumber: e.target.value})} placeholder="Номер телефона"/><br/>
                    <input onChange={(e) => setData({...data, userName: e.target.value})} placeholder="Имя пользователя"/><br/>
                    <input onChange={(e) => setData({...data, password: e.target.value})} type="password" placeholder="Пароль"/><br/>
                    <FormControlLabel className="cb" control={<Checkbox sx={{'& .MuiSvgIcon-root': { fontSize: 28, marginTop: -2 }}} />} label="Согласие на обработку персональных данных" /> <br/>
                    {validation ? (<ValidationText text={error} />) : (<div></div>)}
                    <div style={{marginLeft: 65}}>
                       <BlueButton onClick={registrationHandle} width={200}>Регистрация</BlueButton><br/><br/>
                     </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;