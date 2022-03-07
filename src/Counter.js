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
    const clear = () => {
        setNumber(0);
    }
    const autoIncrease = () => {
        setNumber(number + 1);
        let timerId = setTimeout(setNumber(number + 1), 1000);
    }
    const autoDecrease = () => {
        setNumber(number - 1);
        let timerId = setTimeout(setNumber(number - 1), 1000);
    }
    return (
        <div>
            <div>
                <h1>{number}</h1>
                <button onClick={oneDecrease}>-1</button>       
                <button onClick={oneIncrease}>+1</button>
            </div>         
        
            <div>
                <button onClick={twoDecrease}>-2</button>
                <button onClick={twoIncrease}>+2</button>
            </div>

            <div>
                <button onClick={clear}>CLEAR</button>
            </div>

            <div>
                <button onClick={autoDecrease}>auto -</button>
                <button onClick={autoIncrease}>auto +</button>
            </div>


        </div>
    );
}

export default Counter;