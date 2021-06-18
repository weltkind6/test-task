import React from 'react';
import './Pagination.css'

const Pagination = ({totalUsersCount, usersPerPage, goPaginate}) => {

    const pageNumber = []
    for (let i = 1; i <= Math.ceil(totalUsersCount / usersPerPage); i++) {
        pageNumber.push(i)
    }


    return (
        <nav aria-label="...">
            <ul className="pagination pagination-sm">
                {
                    pageNumber.map(number =>
                        <li className="page-item" key={number}>
                            <a onClick={() => goPaginate(number)}
                               className="page-link"
                               href="#">
                                {number}
                            </a>
                        </li>)
                }
            </ul>
        </nav>
    );
};

export default Pagination;
