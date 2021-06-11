import React from 'react';
import './Table.css'
import ArrowUp from "../ToggleArrow/ArrowUp/ArrowUp";
import ArrowEnd from "../ToggleArrow/ArrowEnd/ArrowEnd";
import ToggleArrow from "../ToggleArrow/ToggleArrow";

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
                    <ToggleArrow toggle={toggle}/>
                </th>
                <th scope="col" onClick={() => sortDataHandler('firstName')}>
                    FirstName
                    <ToggleArrow toggle={toggle}/>
                </th>
                <th scope="col" onClick={() => sortDataHandler('lastName')}>
                    LastName
                    <ToggleArrow toggle={toggle}/>
                </th>
                <th scope="col" onClick={() => sortDataHandler('email')}>
                    Email
                    <ToggleArrow toggle={toggle}/>
                </th>
                <th scope="col" onClick={() => sortDataHandler('phone')}>
                    Phone
                    <ToggleArrow toggle={toggle}/>
                </th>
            </tr>
            </thead>

            <tbody>
            {state.map(i =>
                <tr key={i.id}>
                    <td>{i.id + Math.floor(Math.random() * 100)}</td>
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
// {toggle ? <ArrowUp /> : <ArrowEnd />}
// setState([...state.sort((a, b) => a[callBack] < b[callBack] ? 1 : -1)])