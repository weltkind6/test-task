import React from 'react';
import './Table.css'
import ToggleArrow from "../ToggleArrow/ToggleArrow";

const Table = ({state, toggle, title, sortData}) => {


    return (

        <table className="table">
            <thead className="thead-dark">
            <tr>
                <th scope="col" onClick={() => sortData('id')}>
                    ID
                    {title === 'id' ? <ToggleArrow toggle={toggle}/> : null}
                </th>
                <th scope="col" onClick={() => sortData('firstName')}>
                    FirstName
                    {title === 'firstName' ? <ToggleArrow toggle={toggle}/> : null}
                </th>
                <th scope="col" onClick={() => sortData('lastName')}>
                    LastName
                    {title === 'lastName' ? <ToggleArrow toggle={toggle}/> : null}
                </th>
                <th scope="col" onClick={() => sortData('email')}>
                    Email
                    {title === 'email' ? <ToggleArrow toggle={toggle}/> : null}
                </th>
                <th scope="col" onClick={() => sortData('phone')}>
                    Phone
                    {title === 'phone' ? <ToggleArrow toggle={toggle}/> : null}
                </th>
            </tr>
            </thead>

            <tbody>
            {state.map((i, index) =>
                <tr key={index}>
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
