import React from 'react';
import './Preloader.css'

const Preloader = ({receiving}) => {
    return (
        <div className='preloader'>
            {receiving ?
                <img src="https://media4.giphy.com/media/3oEjI6SIIHBdRxXI40/200.gif" alt="img" className='preloaderImg'/>
                : null}
        </div>
    );
};

export default Preloader;