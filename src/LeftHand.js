import React from 'react';
import './App.css';

function LeftHand(props) {

  const clickInc = () => {
    props.stateCount(props.count + props.step);
  };

  const clickDec = () => {
    props.stateCount(props.count - props.step)  };

  return (
    <div className="App">
      <button onClick={clickInc}>+</button>
      <button onClick={clickDec}>-</button>
    </div>
  );
}
  export default LeftHand;
