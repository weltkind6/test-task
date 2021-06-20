import './App.css';
import React, {useState} from 'react'
import axios from "axios";
import Container from "./Components/Container/Container";

function App() {

    const apiSmallData = 'http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D'
    const apiBigData = 'http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}'

    const [smallData, setSmallData] = useState([])

    // Pagination
    const [bigData, setBigData] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [usersPerPage] = useState(50)

    const lastUsersIndex = currentPage * usersPerPage
    const firstUsersIndex = lastUsersIndex - usersPerPage
    const currentUser = bigData.slice(firstUsersIndex, lastUsersIndex)
    const goPaginate = pageNumber => setCurrentPage(pageNumber)

    //
    const [toggle, setToggle] = useState(true)
    const [receiving, setReceiving] = useState(false)
    const [title, setColumnTitle] = useState('')
    const [tableMoreData, setTableMoreData] = useState('')
    const [preloader, setPreloader] = useState(false)

    // Add user

    const [newUser, setNewUser] = useState({})
    const getDataFromInput = ({id, firstName, lastName, email, phone}) => {
        setNewUser({id, firstName, lastName, email, phone})
        smallData.unshift(newUser)
    }







    // Server request

    const getSmallDataRequest = async () => {
        setPreloader(true)
        axios(apiSmallData)
            .then(response => {
                setSmallData(response.data)
                setReceiving(true)
                setPreloader(false)
            })
            .catch((err) => console.log(err));
    }
    const getBigDataRequest = async () => {
        axios(apiBigData)
            .then(response => {
                setBigData(response.data)
                setReceiving(true)
            })
            .catch((err) => console.log(err));
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
                    className="btn btn-success"
                >Big data
                </button>
            </div>

            {receiving ?
                <Container
                    preloader={preloader}
                    smallData={smallData}
                    setSmallData={setSmallData}
                    bigData={currentUser}
                    toggle={toggle}
                    setToggle={setToggle}
                    sortDataHandler={sortDataHandler}
                    title={title}
                    setTableMoreData={setTableMoreData}
                    getValueHandler={getValueHandler}
                    tableMoreData={tableMoreData}
                    totalUsersCount={bigData.length}
                    usersPerPage={usersPerPage}
                    goPaginate={goPaginate}
                    getDataFromInput={getDataFromInput}
                />

                : null}

        </div>
    );
}

export default App;

// git config --global core.autocrlf true