import './App.css';
import React, {useEffect, useState} from 'react'
import axios from "axios";
import Table from "./Components/Table/Table";

function App() {

    const baseUrl = 'http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D'

    const [state, setState] = useState([])
    const [toggle, setToggle] = useState(true)

    useEffect(() => {
        axios(baseUrl)
            .then(response => {
                setState(response.data)
            })
    }, [])

    return (
        <div className="container">
            <Table
                state={state}
                setState={setState}
                toggle={toggle}
                setToggle={setToggle}
            />
        </div>
    );
}

export default App;
