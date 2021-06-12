import './App.css';
import React, {useEffect, useState} from 'react'
import axios from "axios";
import Table from "./Components/Table/Table";
import Preloader from "./Components/Preloader/Preloader";
import TableMoreData from "./Components/Table/TableMoreData/TableMoreData";

function App() {

    const apiUrl = 'http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D'

    const [smallData, setSmallData] = useState([])
    const [toggle, setToggle] = useState(true)
    const [receiving, setReceiving] = useState(true)
    const [title, setColumnTitle] = useState('')
    const [tableMoreData, setTableMoreData] = useState('')

    // Server request
    // useEffect(() => {
    //     axios(apiUrl)
    //         .then(response => {
    //             setSmallData(response.data)
    //             setReceiving(false)
    //         })
    // }, [])

    const getRequest = async () => {
        axios(apiUrl)
            .then(response => {
                setSmallData(response.data)
                setReceiving(false)
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
            <Table
                smallData={smallData}
                setSmallData={setSmallData}
                toggle={toggle}
                setToggle={setToggle}
                sortDataHandler={sortDataHandler}
                title={title}
                setTableMoreData={setTableMoreData}
                getValueHandler={getValueHandler}
            />
            <div className="buttonsBlock">
                <button
                    onClick={getRequest}
                    type="button"
                    className="btn btn-primary">
                    Small
                </button>
                <button
                    type="button"
                    className="btn btn-warning">
                    Large
                </button>
            </div>
            <Preloader receiving={receiving}/>

            {receiving ? console.log('receiving...(non loaded)') : <TableMoreData tableMoreData={tableMoreData}/>}
        </div>
    );
}

export default App;

// git config --global core.autocrlf true