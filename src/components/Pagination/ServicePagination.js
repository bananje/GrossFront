import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronLeft, faChevronRight, faPlus} from "@fortawesome/free-solid-svg-icons";
import Card from "../Blocks/Card/Card";

export function PaginatedItems({ itemsPerPage, data, ...props}) {

    function Items({ currentItems }) {
        return (
            <>
                {currentItems &&
                    currentItems.map((item) => (
                        <Card title={item.title} price={item.price} category={item.category}/>
                    ))
                }
            </>
        );
    }
    const [itemOffset, setItemOffset] = useState(0);
    const endOffset = itemOffset + itemsPerPage;
    const currentItems = data.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(data.length / itemsPerPage);
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % data.length;
        setItemOffset(newOffset);
    };

    return (
        <>
            <Items currentItems={currentItems} />
            <div style={{width: "300px", margin: "auto"}}>
                <ReactPaginate
                    breakLabel="..."
                    nextLabel={<FontAwesomeIcon icon={faChevronRight}/>}
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
                    pageCount={pageCount}
                    previousLabel={<FontAwesomeIcon icon={faChevronLeft}/>}
                    renderOnZeroPageCount={null}
                    pageClassName="page-item"
                    pageLinkClassName="page-link"
                    previousClassName="page-item"
                    previousLinkClassName="page-link"
                    nextClassName="page-item"
                    nextLinkClassName="page-link"
                    breakClassName="page-item"
                    breakLinkClassName="page-link"
                    containerClassName="pagination"
                    activeClassName="active"
                />
            </div>
        </>
    );
}