import React, {useEffect, useState} from 'react';
import './styles/Blog.css';
import Paragraph from "../components/Paragraph/Paragraph";
import {BlogPagination} from "../components/Pagination/BlogPagination";
import {fakeNews} from "../data/StaticData";
import axios from "axios";


const Blog = () => {

    const [data, setData] = useState([]);
    useEffect(() => {
         loadUsersData()
     }, [])
     const loadUsersData = async () => {
         return await axios
             .get(`https://localhost:7224/api/Post/posts`)
             .then((response) =>
             {
                 setData(response.data);
                 console.log(data);
             })
             .catch((err) => console.log(err));
     }

    return (
        <div>
            <div className="header-back" />
            <div className="container">
                <Paragraph header="Инфоресурс"/>
                <BlogPagination data={fakeNews} itemsPerPage={14}/>
            </div>
        </div>
    );
};

export default Blog;