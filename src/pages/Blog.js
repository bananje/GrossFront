import React, {useState} from 'react';
import './styles/Blog.css';
import {fakeNews} from "../data/StaticData";
import Paragraph from "../components/Paragraph/Paragraph";
import NewsBox from "../components/Blocks/NewsBox/NewsBox";
import {BlogPagination} from "../components/Pagination/BlogPagination";


const Blog = () => {

    function Items({currentItems}){
        return(
            <div className="row">
                {currentItems &&
                    currentItems.map((item) => (
                        <div className="col-md block">
                            <NewsBox button={true} props={item}/>
                        </div>
                    ))}
            </div>
        );
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