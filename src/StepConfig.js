import React from 'react';
import './App.css';

function StepConfig(props) {

  return (
    <div className="App">
      <input onChange={ el =>
        props.onStepChange(+el.target.value)}
      value={props.state} />
    </div>
  );
}

export default StepConfig;
