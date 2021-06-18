import React from 'react';
import Table from "../Table/Table";
import TableMoreData from "../Table/TableMoreData/TableMoreData";
import Preloader from "../Preloader/Preloader";
import Pagination from "../Pagination/Pagination";
import Search from "../Search/Search";

const Container = props => {


    return (
        props.preloader ? <Preloader/> :
            <>
                <Search bigData={props.bigData}/>
                <Table
                    smallData={props.smallData}
                    setSmallData={props.setSmallData}
                    bigData={props.bigData}
                    toggle={props.toggle}
                    setToggle={props.setToggle}
                    sortDataHandler={props.sortDataHandler}
                    title={props.title}
                    setTableMoreData={props.setTableMoreData}
                    getValueHandler={props.getValueHandler}
                />
                <TableMoreData tableMoreData={props.tableMoreData}/>
                <Pagination
                    totalUsersCount={props.totalUsersCount}
                    usersPerPage={props.usersPerPage}
                    goPaginate={props.goPaginate}
                />
            </>
    );
};

export default Container;