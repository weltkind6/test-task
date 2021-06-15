import './App.css';
import React, {useEffect, useState} from 'react'
import axios from "axios";
import Table from "./Components/Table/Table";
import Preloader from "./Components/Preloader/Preloader";
import TableMoreData from "./Components/Table/TableMoreData/TableMoreData";
import Container from "./Components/Container/Container";

function App() {

    const apiSmallData = 'http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D'
    const apiBigData = 'http://www.filltext.com/?rows=64&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}'

    const [smallData, setSmallData] = useState([])
    const [bigData, setBigData] = useState([])
    const [toggle, setToggle] = useState(true)
    const [receiving, setReceiving] = useState(false)
    const [title, setColumnTitle] = useState('')
    const [tableMoreData, setTableMoreData] = useState('')

    // Server request

    const getSmallDataRequest = async () => {
        axios(apiSmallData)
            .then(response => {
                setSmallData(response.data)
                setReceiving(true)
            })
    }
    const getBigDataRequest = async () => {
        axios(apiBigData)
            .then(response => {
                setBigData(response.data)
                setReceiving(true)
            })
    }

    // Sort data
    const sortDataHandler = (tableTitle) => {
        setToggle(!toggle)
        if (toggle) {
            setSmallData([...smallData.sort((a, b) => a[tableTitle] > b[tableTitle] ? 1 : -1)])
        } else setSmallData([...smallData.sort((a, b) => a[tableTitle] < b[tableTitle] ? 1 : -1)])
        setColumnTitle(tableTitle)
    }

    // More data
    const getValueHandler = (callBack) => {
        setTableMoreData(callBack)
    }


    return (
        <div className="container">
            <div className="buttonsBlock">
                <button
                    onClick={getSmallDataRequest}
                    type="button"
                    className="btn btn-primary">
                    Small
                </button>
                <button
                    onClick={getBigDataRequest}
                    type="button"
                    className="btn btn-warning">
                    Large
                </button>
            </div>

            {receiving ?
                <Container
                smallData={smallData}
                setSmallData={setSmallData}
                bigData={bigData}
                toggle={toggle}
                setToggle={setToggle}
                sortDataHandler={sortDataHandler}
                title={title}
                setTableMoreData={setTableMoreData}
                getValueHandler={getValueHandler}
                tableMoreData={tableMoreData}
                />

                : null}
        </div>
    );
}

export default App;

// git config --global core.autocrlf true