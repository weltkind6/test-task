import './App.css';
import React, {useEffect, useState} from 'react'
import axios from "axios";

function App() {

    const baseUrl = 'http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D'

    const [state, setState] = useState([])

    useEffect(() => {
        axios(baseUrl)
            .then(response => {
                setState(response.data)
                console.log(state)
            })
    }, [])

    return (
        <div className="container">
            <table className="table">
                <thead className="thead-dark">
                <tr>
                    <th scope="col">id</th>
                    <th scope="col">firstName</th>
                    <th scope="col">lastName</th>
                    <th scope="col">email</th>
                    <th scope="col">phone</th>
                </tr>
                </thead>
                <tbody>
                {state.map(i =>
                    <tr key={i.id}>
                        <td>{i.id}</td>
                        <td>{i.firstName}</td>
                        <td>{i.lastName}</td>
                        <td>{i.email}</td>
                        <td>{i.phone}</td>
                    </tr>)}

                </tbody>
            </table>

        </div>
    );
}

export default App;
