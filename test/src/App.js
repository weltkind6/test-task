import './App.css';
import React, {useEffect, useState} from 'react'
import axios from "axios";
import Table from "./Components/Table/Table";
import Preloader from "./Components/Preloader/Preloader";

function App() {

    const [state, setState] = useState([])
    const [toggle, setToggle] = useState(true)
    const [receiving, setReceiving] = useState(true)
    const [title, setColumnTitle] = React.useState('')


    useEffect(() => {
        axios('http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D')
            .then(response => {
                setState(response.data)
                setReceiving(false)
            })
    }, [])

    const sortDataHandler = (tableTitle) => {
        setToggle(!toggle)
        if (toggle) {
            setState([...state.sort((a, b) => a[tableTitle] > b[tableTitle] ? 1 : -1)])
        } else setState([...state.sort((a, b) => a[tableTitle] < b[tableTitle] ? 1 : -1)])
        setColumnTitle(tableTitle)
    }


    return (
        <div className="container">
            <Preloader receiving={receiving}/>
            <Table
                state={state}
                setState={setState}
                toggle={toggle}
                setToggle={setToggle}
                sortDataHandler={sortDataHandler}
                title={title}
            />
        </div>
    );
}

export default App;

// git config --global core.autocrlf true