import React from 'react';
import './Table.css'
import ToggleArrow from "../ToggleArrow/ToggleArrow";

const Table = ({smallData, toggle, title, sortDataHandler, getValueHandler}) => {



    return (

        <table className="table">
            <thead className="thead-dark">
            <tr>
                <th scope="col" onClick={() => sortDataHandler('id')}>
                    ID
                    {title === 'id' ? <ToggleArrow toggle={toggle}/> : null}
                </th>
                <th scope="col" onClick={() => sortDataHandler('firstName')}>
                    FirstName
                    {title === 'firstName' ? <ToggleArrow toggle={toggle}/> : null}
                </th>
                <th scope="col" onClick={() => sortDataHandler('lastName')}>
                    LastName
                    {title === 'lastName' ? <ToggleArrow toggle={toggle}/> : null}
                </th>
                <th scope="col" onClick={() => sortDataHandler('email')}>
                    Email
                    {title === 'email' ? <ToggleArrow toggle={toggle}/> : null}
                </th>
                <th scope="col" onClick={() => sortDataHandler('phone')}>
                    Phone
                    {title === 'phone' ? <ToggleArrow toggle={toggle}/> : null}
                </th>
            </tr>
            </thead>

            <tbody>
            {smallData.map((i, index) =>
                <tr key={index} onClick={() => getValueHandler(i)}>
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
