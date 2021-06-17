import React from 'react';

const Pagination = () => {
    return (
        <nav aria-label="...">
            <ul className="pagination pagination-sm">
                <li className="page-item disabled">
                    <a className="page-link" href="#" tabIndex="-1">1</a>
                </li>
                <li className="page-item"><a className="page-link" href="#">2</a></li>
                <li className="page-item"><a className="page-link" href="#">3</a></li>
            </ul>
        </nav>
    );
};

export default Pagination;
