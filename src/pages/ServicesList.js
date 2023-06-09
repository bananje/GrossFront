import React, {Fragment, useEffect, useState} from 'react';
import './styles/ServiceList.css';
import axios from "axios";
import {faMagnifyingGlass, faRotate, faXmark} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import ComplexBlock from "../components/Blocks/ComplexBlock/ComplexBlock";
import Paragraph from "../components/Paragraph/Paragraph";
import {buhPage, rates, urPage} from "../data/StaticData";
import {useLocation} from "react-router-dom";
import {PaginatedItems} from "../components/Pagination/ServicePagination";
import Card from "../components/Blocks/Card/Card";

const ServicesList = () => {

    const [data, setData] = useState([]);
    const [value, setValue] = useState('');
    const [sortValue, setSortValue] = useState('');
    const sortOptions =[
        {
            title: "Названию",
            value: "title"
        },
        {
            title: "Цене",
            value: "price"
        },
        {
            title: "Категории",
            value: "category"
        },
    ]

    const loadUsersData = async () => {
        return  await axios
            .get(`https://localhost:7224/api/Service/services`)
            .then((response) =>
            {
                setData(response.data);
                console.log(data);
            })
            .catch((err) => console.log(err));
    }
    const handleSearch = async (e) => {
        return await axios
            .get(`https://localhost:7224/api/Service/search?searchString=${value}`)
            .then((response) => setData(response.data))
            .catch((err) => console.log(err));
    }
    const handleSort = async (e) => {
        let value = e.target.value;
        setSortValue(value);
        return await axios
            .get(`https://localhost:7224/api/Service/filter?criteria=${value}&ascending=true`)
            .then((response) => setData(response.data))
            .catch((err) => console.log(err));
    }
    const handleReset = () => {
        setValue("");
        loadUsersData();
    }

    const location = useLocation();
    useEffect(() => {
        loadUsersData()
    }, [])
    const title = location.state ? buhPage.map(item => item.title) : urPage.map(item => item.title);
    const description = location.state ? buhPage.map(item => item.description) : urPage.map(item => item.description);

    return (
        <div>
            <div className="header-back" />
            <div className="container">
                <div className="service-banner">
                    <h1>{title}</h1>
                </div>
                <div className="desc">
                    <h3>{title}</h3>
                    <p>
                        {description}
                   </p>
                </div>
                {
                    location.state ? (
                        <div>
                            <Paragraph header="Бухгалтерские тарифы"/>
                            <div className="row pb-5 mb-5">
                                {
                                    rates.map((rate) =>(
                                        <ComplexBlock rates={rate}/>
                                    ))
                                }
                            </div>
                        </div>
                        ) : (<div></div>)
                }
                <div className="row">

                </div>
                <Paragraph header="Наши услуги"/>
                <div className="card-list">
                    <div className="card-list__sort-block">
                        <div className="input-group">
                            <input
                                type="text"
                                placeholder="Например: составление и сдача декларации"
                                value={value}
                                onChange={event => setValue(event.target.value)}
                            />
                            <FontAwesomeIcon className="icons" size="xl" onClick={handleSearch} icon={faMagnifyingGlass} style={{color: "#2d9cdb",marginLeft: "40px"}} />
                            <FontAwesomeIcon className="icons" size="xl" icon={faRotate} style={{color: "#2d9cdb",marginLeft: "20px"}} onClick={() => handleReset()}/>
                        </div>

                        <select
                            onChange={handleSort}
                            value={sortValue}
                        >
                            <option>Сортировка</option>
                            {sortOptions.map((item, index) => (
                                <option value={item.value} key={index}>
                                    {item.title}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="line" />
                    <div className="row">
                        <div className="row">
                            {data.length === 0 ? (
                                    <div className="error">
                                        <FontAwesomeIcon  icon={faXmark} size="2xl" style={{color: "red"}}/>
                                        <h1>Такой услуги не найдено</h1>
                                    </div>)
                                :
                                (
                                    <PaginatedItems itemsPerPage={7} data={data} body={<Card title={data.title}/>}/>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesList;