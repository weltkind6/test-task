import React from 'react';
import './TableMoreData.css'

const TableMoreData = ({tableMoreData}) => {

    const streetAddress = tableMoreData && tableMoreData.address ? tableMoreData.address.streetAddress : null
    const city = tableMoreData && tableMoreData.address ? tableMoreData.address.city : null
    const state = tableMoreData && tableMoreData.address ? tableMoreData.address.state : null
    const zip = tableMoreData && tableMoreData.address ? tableMoreData.address.zip : null

    return (
        <div className='moreData__wrapper'>
            <h3 className='moreData__title'>More data</h3>
            <div> ✅ID: <b>{tableMoreData.id}</b></div>
            <div> ✅FirstName: <b>{tableMoreData.firstName}</b></div>
            <div> ✅LastName: <b>{tableMoreData.lastName}</b></div>
            <div> ✅Email: <b>{tableMoreData.email}</b></div>
            <div> ✅Phone: <b>{tableMoreData.phone}</b></div>
            <div> ☑️Address:</div>
            <div>✅streetAddress: <b>{streetAddress}</b></div>
            <div>✅city: <b>{city}</b></div>
            <div>✅state: <b>{state}</b></div>
            <div>✅zip: <b>{zip}</b></div>
            <div>✅description: <b>{tableMoreData.description}</b></div>

        </div>
    );
};

export default TableMoreData;