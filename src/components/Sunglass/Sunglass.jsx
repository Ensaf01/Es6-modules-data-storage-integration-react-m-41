import React from 'react';
import'./Sunglass.css'
import Watch from '../Watch/Watch';
import  { add,multiply,dividedByNumberTwo as divided }  from '../../Utils/calculate';

const Sunglass = () => {
    const first = 55;
    const second = 45;
    const total = add(first, second);

    const mult=multiply(first, second);

    const vag= divided (first, second);
    

    return (
        <div>
            <Watch></Watch>
        </div>
    );
};

export default Sunglass;