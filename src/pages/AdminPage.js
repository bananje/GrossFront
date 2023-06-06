import React, {useEffect, useState} from 'react';
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import axios from "axios";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRightFromBracket} from "@fortawesome/free-solid-svg-icons";
const AdminPage = () => {

    const [data, setData] = useState([]);
    const [modalActive, setModalActive] = useState([]);
    const loadData = async () => {
        return  await axios
            .get(`http://localhost:3000/${url}`)
            .then((response) =>
            {
                setData(response.data);
            })
            .catch((err) => console.log(err));
    }
    useEffect(() => {
        loadData();
    }, [])

    const [page, setPage] = useState("");
    const [title, setTitle] = useState("");
    const [headers, setHeaders] = useState([]);
    const [url, setUrl] = useState('');
    function pageHandle(number) {
        setPage(number);
        if(page == 1){
            setTitle("Услуги");
            setHeaders(['Наименование', 'Стоимость', 'Категория']);
            setUrl("services")
        }
        if(page == 2){
            setTitle("Категории (услуги)");
            setHeaders(['Наименование']);
            setUrl("categories")
        }
        if(page == 3){
            setTitle("Посты");
            setHeaders(['Заголовок','Короткое описание', 'Описание', 'Дата']);
            setUrl("posts")
        }
    }

    return (
        <div>
            <div className="header-back">
                <Navbar collapseOnSelect expand="xl" variant="dark">
                    <Container >
                        <Navbar.Brand>
                            <img src={require('../img/UI/logo.png')} width="64px"/>ГроссБухгалтерия
                        </Navbar.Brand>
                        <FontAwesomeIcon icon={faArrowRightFromBracket} size="xl" style={{color: "#ffffff",}} />
                    </Container>
                </Navbar>
            </div>
            <div className="container">
                <div className="row mt-5">
                    <Nav>
                        <NavDropdown title="Выберите объект" id="nav-dropdown">
                            <NavDropdown.Item onClick={() => pageHandle(1)} eventKey="4.1">Услуги</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => pageHandle(2)} eventKey="4.2">Категории (услуги)</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => pageHandle(3)} eventKey="4.3">Посты</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => pageHandle(4)} eventKey="4.4">Отзывы</NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown title="Заявки на обратную связь" id="nav-dropdown">
                            <NavDropdown.Item eventKey="4.1">Активные заявки</NavDropdown.Item>
                            <NavDropdown.Item eventKey="4.2">Неактивные заявки</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <div className="orders row">
                        <div className="row">
                            <div className="row">
                                <h2 className="mb-4 mt-5">{title}</h2>
                                <div className="row">
                                    <table className="table table-bordered table-striped">
                                        <thead>
                                        <tr>
                                            {headers.map((header) => (
                                                <th>{header}</th>
                                            ))}
                                            <th>Действия</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {
                                            data.map(item => (
                                                <tr>
                                                    <td width="40%">{item.fio}</td>
                                                    <td width="20%">{item.telNumber}</td>
                                                    <td width="20%">{item.email}</td>
                                                    <td width="20%">{item.status}</td>
                                                    <td className="text-center">
                                                        <div className="w-75 btn-group" role="group">
                                                            <button>Отметить</button>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))
                                        }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminPage;