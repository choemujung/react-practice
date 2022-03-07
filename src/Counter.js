import { clear } from '@testing-library/user-event/dist/clear';
import React, {useState} from 'react';

function Counter() {
    const [number, setNumber] = useState(0);

    const oneIncrease = () => {
        setNumber(number + 1);
    }
    const oneDecrease = () => {
        setNumber(number - 1);
    }
    const twoIncrease = () => {
        setNumber(number + 2);
    }
    const twoDecrease = () => {
        setNumber(number - 2);
    }
    return (
        <div>
            <div>
                <h1>{number}</h1>
                <button onClick={oneIncrease}>+1</button>
                <button onClick={oneDecrease}>-1</button>       
            </div>         
        
            <div>
                <button onClick={twoIncrease}>+2</button>
                <button onClick={twoDecrease}>-2</button>
            </div>


        </div>
    );
}

export default Counter;