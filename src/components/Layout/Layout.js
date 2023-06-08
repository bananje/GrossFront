import React, {useState} from 'react';
import './Layout.css';
import {Container, Nav, Navbar} from "react-bootstrap";
import {Link, NavLink, Outlet} from "react-router-dom";
import {header} from "../../data/StaticData";
import BlueButton from "../BlueButton/BlueButton";
import Modal from "../Modal/Modal";
import Authorization from "../Authorization/Authorization";
import Registration from "../Registration/Registration";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGear, faUser} from "@fortawesome/free-solid-svg-icons";
import {Button} from "@mui/material";

const Layout = () => {

    const [authorizationActive, setAuthorizationActive] = useState(false);
    const [registrationActive, setRegistrationActive] = useState(false);
    const [regContent, setRegContent] = useState(false);
    const [isAuthorize, setIsAuthorize] = useState(false);
    const modalHandle = (active) => {
        setAuthorizationActive(active)
        setRegistrationActive(true)
    }
    const regHandle = (active) => {
        setRegContent(active);
    }
    const authorizeHandle = (active) =>{
        setIsAuthorize(active);
        console.log(isAuthorize);
    }
    return (
        <div>
            <Navbar collapseOnSelect expand="xl" variant="dark">
                <Container >
                    <Navbar.Brand href="/main">
                        <img src={require('../../img/UI/logo.png')} width="64px"/>ГроссБухгалтерия
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto" >
                            {
                                header.map((item) => (
                                    <NavLink to={item.path} key={item.name}
                                             className="list_item px-3 pt-lg-2" href={item.path}>
                                        {item.name}
                                    </NavLink>
                                ))
                            }
                        </Nav>
                        <Nav>
                            {
                                !isAuthorize ? (
                                    <NavLink onClick={() => setAuthorizationActive(true)} eventKey={2} >
                                        <a className="px-3">
                                            <svg width="80" height="32" viewBox="0 0 80 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M4 1H76C77.6569 1 79 2.34315 79 4V28C79 29.6569 77.6569 31 76 31H4C2.34315 31 1 29.6569 1 28V20H0V28C0 30.2091 1.79086 32 4 32H76C78.2091 32 80 30.2091 80 28V4C80 1.79086 78.2091 0 76 0H4C1.79086 0 0 1.79086 0 4V12H1V4C1 2.34315 2.34315 1 4 1Z" fill="white"/>
                                                <path d="M0 17V15H10L8 12L10 11L13.5 16L10 21L8 20L10 17H0Z" fill="white"/>
                                                <path d="M29.9228 15.644C30.4908 15.78 30.9188 16.024 31.2068 16.376C31.5028 16.72 31.6508 17.164 31.6508 17.708C31.6508 18.436 31.3828 19 30.8468 19.4C30.3188 19.8 29.5468 20 28.5308 20H24.6908V11.6H28.3028C29.2228 11.6 29.9388 11.788 30.4508 12.164C30.9708 12.532 31.2308 13.064 31.2308 13.76C31.2308 14.216 31.1148 14.604 30.8828 14.924C30.6588 15.244 30.3388 15.484 29.9228 15.644ZM25.8788 15.296H28.2188C28.8028 15.296 29.2468 15.18 29.5508 14.948C29.8628 14.716 30.0188 14.376 30.0188 13.928C30.0188 13.48 29.8628 13.14 29.5508 12.908C29.2388 12.668 28.7948 12.548 28.2188 12.548H25.8788V15.296ZM28.5068 19.052C29.7948 19.052 30.4388 18.572 30.4388 17.612C30.4388 17.132 30.2748 16.78 29.9468 16.556C29.6268 16.324 29.1468 16.208 28.5068 16.208H25.8788V19.052H28.5068ZM36.1877 20.072C35.5557 20.072 34.9877 19.932 34.4837 19.652C33.9797 19.372 33.5837 18.988 33.2957 18.5C33.0157 18.004 32.8757 17.444 32.8757 16.82C32.8757 16.196 33.0157 15.64 33.2957 15.152C33.5837 14.656 33.9797 14.272 34.4837 14C34.9877 13.72 35.5557 13.58 36.1877 13.58C36.8197 13.58 37.3837 13.72 37.8797 14C38.3837 14.272 38.7757 14.656 39.0557 15.152C39.3437 15.64 39.4877 16.196 39.4877 16.82C39.4877 17.444 39.3437 18.004 39.0557 18.5C38.7757 18.988 38.3837 19.372 37.8797 19.652C37.3837 19.932 36.8197 20.072 36.1877 20.072ZM36.1877 19.064C36.5957 19.064 36.9597 18.972 37.2797 18.788C37.6077 18.596 37.8637 18.332 38.0477 17.996C38.2317 17.652 38.3237 17.26 38.3237 16.82C38.3237 16.38 38.2317 15.992 38.0477 15.656C37.8637 15.312 37.6077 15.048 37.2797 14.864C36.9597 14.68 36.5957 14.588 36.1877 14.588C35.7797 14.588 35.4117 14.68 35.0837 14.864C34.7637 15.048 34.5077 15.312 34.3157 15.656C34.1317 15.992 34.0397 16.38 34.0397 16.82C34.0397 17.26 34.1317 17.652 34.3157 17.996C34.5077 18.332 34.7637 18.596 35.0837 18.788C35.4117 18.972 35.7797 19.064 36.1877 19.064ZM41.1512 13.64H42.3032V18.272L46.2032 13.64H47.2472V20H46.0952V15.368L42.2072 20H41.1512V13.64ZM44.1272 12.812C43.5352 12.812 43.0752 12.672 42.7472 12.392C42.4192 12.104 42.2512 11.692 42.2432 11.156H43.0232C43.0312 11.452 43.1312 11.692 43.3232 11.876C43.5232 12.052 43.7872 12.14 44.1152 12.14C44.4432 12.14 44.7072 12.052 44.9072 11.876C45.1072 11.692 45.2112 11.452 45.2192 11.156H46.0232C46.0152 11.692 45.8432 12.104 45.5072 12.392C45.1712 12.672 44.7112 12.812 44.1272 12.812ZM54.2232 14.648H51.8952V20H50.7432V14.648H48.4152V13.64H54.2232V14.648ZM55.4012 13.64H56.5532V18.272L60.4532 13.64H61.4972V20H60.3452V15.368L56.4572 20H55.4012V13.64Z" fill="white"/>
                                            </svg>
                                        </a>
                                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M31 16C31 24.2843 24.2843 31 16 31C7.71573 31 1 24.2843 1 16C1 7.71573 7.71573 1 16 1C18.1333 1 20.1626 1.44534 22 2.24813V1.16303C20.1471 0.413014 18.1218 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32C24.8366 32 32 24.8366 32 16C32 13.8782 31.587 11.8529 30.837 10H29.7519C30.5547 11.8374 31 13.8667 31 16Z" fill="white"/>
                                            <path d="M14.9037 17.6183C14.9037 17.065 15.0345 16.6113 15.2959 16.2573C15.5573 15.8921 15.9376 15.4938 16.4367 15.0622C16.7813 14.7635 17.0368 14.5145 17.2032 14.3154C17.3696 14.1051 17.4528 13.8838 17.4528 13.6515C17.4528 13.3306 17.3042 13.0761 17.0071 12.888C16.7219 12.6888 16.3476 12.5892 15.8841 12.5892C15.4088 12.5892 14.975 12.6943 14.5829 12.9046C14.2026 13.1148 13.8936 13.408 13.656 13.7842L11 12.4564C11.4872 11.6819 12.1765 11.0788 13.0677 10.6473C13.959 10.2158 15.0345 10 16.2941 10C17.7083 10 18.8431 10.2766 19.6988 10.8299C20.5663 11.3721 21 12.1355 21 13.1203C21 13.574 20.9168 13.9779 20.7504 14.332C20.5841 14.675 20.3821 14.9682 20.1444 15.2116C19.9186 15.444 19.6215 15.7095 19.2531 16.0083C18.8491 16.3292 18.552 16.6058 18.3619 16.8382C18.1717 17.0595 18.0766 17.3195 18.0766 17.6183H14.9037ZM16.4902 22C15.9079 22 15.4266 21.834 15.0463 21.5021C14.6661 21.1591 14.4759 20.7441 14.4759 20.2573C14.4759 19.7593 14.6601 19.3499 15.0285 19.029C15.4088 18.7082 15.896 18.5477 16.4902 18.5477C17.0844 18.5477 17.5716 18.7082 17.9519 19.029C18.3321 19.3499 18.5223 19.7593 18.5223 20.2573C18.5223 20.7441 18.3321 21.1591 17.9519 21.5021C17.5716 21.834 17.0844 22 16.4902 22Z" fill="white"/>
                                            <circle cx="28" cy="4" r="4" transform="rotate(180 28 4)" fill="#EC3C3C"/>
                                        </svg>
                                    </NavLink>
                                ) : (
                                    <NavLink eventKey={2} >
                                        <Link to="/adminpage">
                                            <FontAwesomeIcon icon={faGear} style={{color: "white"}} size="xl"/>
                                        </Link>
                                        <FontAwesomeIcon icon={faUser} style={{color: "#ffffff", marginLeft: 20}} size="xl"/>
                                    </NavLink>
                                )
                            }
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Outlet />
            <footer>
                <div className="connection">
                    <div className="connection-form">
                        <div className="liner" />
                        <h1>Просто заполните форму заявки. Мы свяжемся с вами</h1>
                        <div className="liner mb-5" />
                        <input type="text" placeholder="Имя"/>
                        <input type="text" placeholder="Телефон"/>
                        <input type="text" placeholder="Компания"/>
                        <input type="text" placeholder="Email"/>
                        <BlueButton width={170} height={50}>Оставить заявку</BlueButton>
                    </div>
                </div>
                <div className="footer">
                </div>
            </footer>
            <Modal active={authorizationActive} setActive={setAuthorizationActive}>
                <Authorization isAuthorize={authorizeHandle} modalHandle={modalHandle} />
            </Modal>
            <Modal setActive={setRegistrationActive} active={registrationActive}>
                {
                    !regContent ?  <Registration regHandle={regHandle}/>
                        :
                        (
                            <div className="reg-ok">
                                <img src={require('../../img/UI/ok.png')} alt=""/>
                                <p>Спасибо за Регистрацию!</p>
                                <Button onClick={() => setRegistrationActive(false)} variant="outlined">Закрыть</Button>
                            </div>
                        )
                }
            </Modal>
        </div>
    );
};

export default Layout;