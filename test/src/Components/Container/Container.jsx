import React from 'react';
import Table from "../Table/Table";
import TableMoreData from "../Table/TableMoreData/TableMoreData";

const Container = props => {
    return (
        <>
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
        </>
    );
};

export default Container;