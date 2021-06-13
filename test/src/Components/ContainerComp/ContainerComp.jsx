import React from 'react';
import TableMoreData from "../Table/TableMoreData/TableMoreData";
import Preloader from "../Preloader/Preloader";
import Table from "../Table/Table";

const ContainerComp = (props) => {

    return (
        <>
            <Preloader receiving={props.receiving}/>
            <Table
                smallData={props.smallData}
                setSmallData={props.setSmallData}
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


export default ContainerComp;