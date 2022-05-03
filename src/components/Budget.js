import React, { useContext } from 'react';
import {AppContext} from '../context/AppContext';

function Budget() {

    const {budget} = useContext(AppContext);

    return (
        <div className='alert alert-secondary'>
            <span> Budget: $2000 </span>
        </div>
    );
}

export default Budget;