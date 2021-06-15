import React from 'react';
import Table from "../Table/Table";
import TableMoreData from "../Table/TableMoreData/TableMoreData";
import Preloader from "../Preloader/Preloader";

const Container = props => {


    return (
        props.preloader ? <Preloader/> :
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