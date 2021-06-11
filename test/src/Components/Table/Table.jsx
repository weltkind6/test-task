import React from 'react';
import './Table.css'
import ArrowUp from "../ToggleArrow/ArrowUp/ArrowUp";
import ArrowEnd from "../ToggleArrow/ArrowEnd/ArrowEnd";

const Table = ({state, setState, toggle, setToggle}) => {

    const sortDataHandler = (callBack) => {
        setToggle(!toggle)
        if (toggle) {
            setState([...state.sort((a, b) => a[callBack] > b[callBack] ? 1 : -1)])
        } else setState([...state.sort((a, b) => a[callBack] < b[callBack] ? 1 : -1)])
    }


    return (
        <table className="table">
            <thead className="thead-dark">
            <tr>
                <th scope="col" onClick={() => sortDataHandler('id')}>
                    ID
                    {toggle ? <ArrowUp /> : <ArrowEnd />}
                </th>
                <th scope="col" onClick={() => sortDataHandler('firstName')}>FirstName</th>
                <th scope="col" onClick={() => sortDataHandler('lastName')}>LastName</th>
                <th scope="col" onClick={() => sortDataHandler('email')}>Email</th>
                <th scope="col" onClick={() => sortDataHandler('phone')}>Phone</th>
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
    );
};

export default Table;

//