import React, { useState } from 'react';
import Calculate from '../logic/calculate';

const Calculator = () => {
  const [state, setState] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = (e) => {
    const result = Calculate(state, e.target.textContent);
    setState((prevState) => ({
      ...prevState,
      ...result,
    }));
  };

  return (
    <div className="cal-container">
      <p className="result">
        {state.next || state.operation || state.total || 0}
      </p>
      <button type="button" className="keys" onClick={handleClick}>AC</button>
      <button type="button" className="keys" onClick={handleClick}>+/-</button>
      <button type="button" className="keys" onClick={handleClick}>%</button>
      <button type="button" className="keys right-col" onClick={handleClick}>÷</button>
      <button type="button" className="keys" onClick={handleClick}>7</button>
      <button type="button" className="keys" onClick={handleClick}>8</button>
      <button type="button" className="keys" onClick={handleClick}>9</button>
      <button type="button" className="keys right-col" onClick={handleClick}>x</button>
      <button type="button" className="keys" onClick={handleClick}>4</button>
      <button type="button" className="keys" onClick={handleClick}>5</button>
      <button type="button" className="keys" onClick={handleClick}>6</button>
      <button type="button" className="keys right-col" onClick={handleClick}>-</button>
      <button type="button" className="keys" onClick={handleClick}>1</button>
      <button type="button" className="keys" onClick={handleClick}>2</button>
      <button type="button" className="keys" onClick={handleClick}>3</button>
      <button type="button" className="keys right-col" onClick={handleClick}>+</button>
      <button type="button" className="bottom-zero" onClick={handleClick}>0</button>
      <button type="button" className="keys" onClick={handleClick}>.</button>
      <button type="button" className="keys right-col" onClick={handleClick}>=</button>
    </div>
  );
};

export default Calculator;
