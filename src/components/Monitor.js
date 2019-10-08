import {useSelector} from "react-redux";
import React from 'react';

export const Monitor = () => {
    const status = useSelector(store => store.monitor);
    return <p id={'monitor'}>
        {status}
    </p>;
};