import React from 'react';
import ArrowUp from "./ArrowUp/ArrowUp";
import ArrowEnd from "./ArrowEnd/ArrowEnd";

const ToggleArrow = ({toggle}) => {
    return (
        <>
            {toggle ? <ArrowUp /> : <ArrowEnd />}
        </>
    );
};

export default ToggleArrow;