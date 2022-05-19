import { useState } from 'react';
const CounterComponent = ({initialValue, limiValue}) => {
    console.log(initialValue);
    const [count, setCount] = useState(initialValue);
    return (<div>
        <p>
            You clicked {count} times
        </p>
        <button onClick={() => setCount(count + 1)}>
            +1
        </button>
        <button onClick={() => setCount(count - 1)}>
            -1
        </button>
    </div>);
}
export default CounterComponent;