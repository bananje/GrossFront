import React, {useEffect, useState} from 'react';
import './styles/AdminPage.css';
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRightFromBracket, faCirclePlus} from "@fortawesome/free-solid-svg-icons";
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle, TextField,
} from "@mui/material";
import Modal from "../components/Modal/Modal";
import {Link} from "react-router-dom";
import axios from "axios";

const AdminPage = () => {
    //Отрисовка контента
    const [page, setPage] = useState(1);
    const [data, setData] = useState([]);
    const [title, setTitle] = useState("");
    const [headers, setHeaders] = useState([]);
    const [url, setUrl] = useState();
    const [urlAdd, setUrlAdd] = useState();
    const [urlDelete, setUrlDelete] = useState();
    const [values, setValues] = useState([])
    const [rowData, setRowData] = useState([]);

    const loadData = async (prop) => {
        fetch(`https://localhost:7224/api/` + prop, {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem("token")
            }
        })
            .then(response => response.json())
            .then(data => {
                setData(data);
                // Обработка успешного ответа от сервера
            })
            .catch(error => {
                console.error('Ошибка при загрузке данных:', error);
                // Обработка ошибки
            });
    };
    function BtnGroup(obj) {
        return(
            <div className="w-75 btn-group" role="group">
                <Button onClick={() => updateModalOpen(obj)} variant="contained" color="success">
                    Обновить
                </Button>
                <Button onClick={() => handleClickOpen(obj)} variant="outlined" color="error">
                    Удалить
                </Button>
            </div>
        );
    }
    //Состояния для модалок
    const [open, setOpen] = React.useState(false);
    const [modalActive, setModalActive] = useState(false);
    const [modalAddActive, setModalAddActive] = useState(false);
    const handleClickOpen = (obj) => {
        setOpen(true);
        setRowData(obj);
    };
    const handleClose = () => {
        setOpen(false);
    };
    useEffect(() => {
        pageHandle(1);
    }, [])
    function pageHandle(page) {
        setPage(page);
        switch (page) {
            case 1:
                setUrl('Service/services')
                setUrlDelete('Service/deleteservice/')
                setTitle("Услуги");
                setHeaders(['Наименование', 'Стоимость', 'Категория']);
                setUrlAdd('Service/addservice');
                loadData('Service/services')
                break;
            case 2:
                setUrl('Category/categories')
                setUrlAdd('Category/categorycreate');
                setUrlDelete('Category/deletecategory/')
                setTitle("Категории (услуги)");
                setHeaders(['Наименование']);
                loadData('Category/categories')
                break;
            case 3:
                setUrl('Post/posts')
                setTitle("Посты");
                setUrlAdd('Post/addpost');
                setHeaders(['Заголовок','Короткое описание', 'Описание', 'Дата']);
                loadData('Post/posts')
                break;
            case 4:
                setUrlAdd('Report/addreport');
                setTitle("Отзывы");
                setHeaders(['ФИО','Должность', 'Описание']);
                setUrl('Reports/reports')
                loadData('Report/addreport')
                break;
            case 5:
                setTitle("Заявки на обратную связь");
                setHeaders(['ФИО','Email','Номер телефона','Статус'])
                setUrl('FeedbackOrders/fborders')
                loadData('FeedbackOrders/fborders')
                break;
        }
    }
    const getValuesHandler = (event,index) => {
       const {value} = event.target;
       setValues((prevValues) => {
           const updatedValues = [...prevValues];
           updatedValues[index] = value;
           return updatedValues;
       });
    }
    const setValuesHandler = () => {

    }

    let objTodb = null;
    const objCreate = (value) => {

        const ruDate = new Intl.DateTimeFormat("ru", {day: "numeric", month: "long", year: "numeric", weekday: "long"})
            .format(new Date()).replace(/(\s?\г\.?)/, "")

        switch (page){
            case 1:
                objTodb = {
                    title: value[0],
                    price: value[1],
                    categoryId: "d79eb1c8-1461-4d6b-b3a5-38ef14036291"
                }
                break;
            case 2:
                objTodb = {
                    title: value[0],
                }
                break;
            case 3:
                objTodb = {
                    post:{
                        description: value[0],
                        shortDescription: value[1],
                        header: value[2],
                        releaseDate: ruDate
                    },
                    image: null
                }
                break;
            case 4:
                objTodb = {
                    report:{
                        header: value[0],
                        position: value[1],
                        description: value[2]
                    },
                    image: null
                }
                break;
        }
        return objTodb;
    }
    const addHandler = () => {
        fetch('https://localhost:7224/api/' + urlAdd, {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem("token"),
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(objCreate(values))

        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }
    const updateModalOpen = (obj) => {
        setModalActive(true)
        setRowData(obj);
        setValues(obj);
    }
    const updateHandle = () => {
        console.log(rowData)
    }
    const deleteHandler = () => {
        axios.delete('https://localhost:7224/api/' + urlDelete + rowData.obj.id , {
            headers:{
                'Authorization': 'Bearer ' + localStorage.getItem("token")
            }
        })
            .then(response => {
                setOpen(false)
                loadData(url)
            })
            .catch(error => {
                console.error('Ошибка удаления данных', error);
            });
    }

    return (
        <div>
            <Modal active={modalActive} setActive={setModalActive}>
                <div className="update-modal">
                    <h3>Обновление {title}</h3>
                    {
                        headers.map((header, index) => (
                            <div className="update-modal__input">
                                {Object.keys(rowData).map(key => (
                                    <TextField
                                        id="outlined-number"
                                        label={header}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        value={rowData[key]}
                                        onChange={(e) => setValuesHandler(e, index)}
                                    />
                                ))}
                            </div>
                        ))
                    }
                    <div className="update-modal__input">
                        <Button className="update-modal__btn" variant="outlined" onClick={() => setModalActive(false)}>Отмена</Button>
                        <Button onClick={updateHandle} className="update-modal__btn" variant="contained" color="success">
                           Обновить
                        </Button>
                    </div>
                </div>
            </Modal>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Удалить выбранный объект " + title}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Внимание! После удаления {title}, восстановить объект будет невозможно. Удалить объект {title} навсегда?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpen(false)} color="primary">
                        Отмена
                    </Button>
                    <Button onClick={deleteHandler} variant="outlined" color="error">
                        Удалить
                    </Button>
                </DialogActions>
            </Dialog>

            <Modal active={modalAddActive} setActive={setModalAddActive}>
                <h4 className="mt-3 mb-3">Добавить новый элемент {title}</h4>
                {
                    headers.map((header, index) => (
                        <div>
                            <TextField value={values[index] || ''} onChange={(e) => getValuesHandler(e,index)} fullWidth={true} className="add-input" id="outlined-basic" label={header} variant="outlined" />
                            <br/>
                        </div>
                    ))
                }
                <div className="group-btn">
                    <Button onClick={() => setModalAddActive(false)} variant="outlined">Отмена</Button>
                    <Button onClick={addHandler} variant="contained" color="success">
                        Добавить
                    </Button>
                </div>
            </Modal>

            <div className="header-back">
                <Navbar collapseOnSelect expand="xl" variant="dark">
                    <Container >
                        <Navbar.Brand>
                            <img src={require('../img/UI/logo.png')} width="64px"/>ГроссБухгалтерия
                        </Navbar.Brand>
                        <Link to="/main">
                            <FontAwesomeIcon icon={faArrowRightFromBracket} size="xl" style={{color: "#ffffff",}} />
                        </Link>
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

                        <NavDropdown title="Заявки" id="nav-dropdown">
                            <NavDropdown.Item onClick={() => pageHandle(5)} eventKey="4.1">Заявки на обратную связь</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => pageHandle(6)} eventKey="4.2">Заказы</NavDropdown.Item>
                        </NavDropdown>
                        <FontAwesomeIcon onClick={() => setModalAddActive(true)} icon={faCirclePlus} size="xl" className="col nav-plus"/>

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
                                            <th style={{textAlign: "center"}}>Действия</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                page === 1 && data.map(item => (
                                                    <tr key={item.id}>
                                                        <td width="40%">{item.title}</td>
                                                        <td width="20%">{item.price}</td>
                                                        <td width="20%">{item.category}</td>
                                                        <td className="text-center">
                                                            <BtnGroup obj={item} />
                                                        </td>
                                                    </tr>
                                                ))
                                            }
                                            {
                                                page === 5 && data.map(item => (
                                                    <tr>

                                                        {/*<td width="40%">{console.log(item.post.fullName)}</td>*/}
                                                        {/*<td width="20%">{item.email}</td>*/}
                                                        {/*<td width="20%">{item.telNumber}</td>*/}
                                                        {/*<td width="20%">{item.status}</td>*/}
                                                        <td className="text-center">
                                                            <BtnGroup />
                                                        </td>
                                                    </tr>
                                                ))
                                            }
                                            {
                                                // page === 3 && data.map(item => (
                                                //     <tr>
                                                //         <td width="40%">{item.subject}</td>
                                                //         <td width="20%">{item.shortdesc}</td>
                                                //         <td width="20%">{item.date}</td>
                                                //         <td className="text-center">
                                                //             <BtnGroup />
                                                //         </td>
                                                //     </tr>
                                                // ))
                                            }
                                            {

                                                page === 3 && data.map(item => (
                                                    <tr>
                                                        {console.log(page)}
                                                        <td width="40%">{item.post.description}</td>
                                                        <td width="20%">{item.post.shortDescription}</td>
                                                        <td width="20%">{item.post.header}</td>
                                                        <td width="20%">{item.post.releaseDate}</td>
                                                        <td className="text-center">
                                                            <BtnGroup />
                                                        </td>
                                                    </tr>
                                                ))
                                            }
                                            {
                                                page === 2 && data.map(item => (
                                                    <tr key={item.id}>
                                                        <td width="40%">{item.title}</td>
                                                        <td className="text-center">
                                                            <BtnGroup obj={item} />
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