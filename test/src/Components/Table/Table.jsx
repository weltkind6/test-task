import React from 'react';
import './Table.css'

const Table = ({state, setState}) => {

    const sortDataHandler = () => {
        setState([...state.sort((a, b) => a.id - b.id)])
    }


    return (
        <table className="table">
            <thead className="thead-dark">
            <tr>
                <th scope="col" onClick={sortDataHandler}>ID</th>
                <th scope="col">FirstName</th>
                <th scope="col">LastName</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
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