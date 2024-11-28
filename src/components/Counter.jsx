import { useState } from 'react'
import '../App.css'

const Counter = () => {
    const [count, setCount] = useState(0);
    const [inputVal, setInputVal] = useState(1);

    const incCount = () => {
        let newCount = count + inputVal;
        setCount(newCount);
    }

    const decCount = () => {
        let newCount = count - inputVal;
        setCount(newCount);
    }

    const resetVal = () => {
        setCount(0);
        setInputVal(1);
    }

    const handleInputChange = (e) => {
        const value = Number(e.target.value);
        setInputVal(value)
    }

  return (
    <div className='container'>
        <div className="row first-row">
            <p id='count'>{count}</p>
            <button className="custom-btn" onClick={() => decCount()}>-</button>
            <button className="custom-btn" onClick={() => incCount()}>+</button>
        </div>
        <div className="row">
            <p>Increment/Decrement by: </p>
            <input type="number" value={inputVal} onChange={handleInputChange} />
        </div>
        <div className="row">
            <button className="custom-btn" onClick={() => resetVal()}>Reset</button>
        </div>
    </div>
  )
}

export default Counter
