import React, {useState} from 'react';
import './App.css';

import LeftHand from "./LeftHand";
import RightHand from "./RightHand";
import StepConfig from "./StepConfig";

function App() {

  const [count, setCount] = useState(15);
  const [step, setStep] = useState(2);

  const stateCount = (newValue) => {
    setCount(newValue);
  };

  const onStepChange = (value) => {
    setStep(value);
  };

  return (
    <div className="App">
      <RightHand count={count}/>
      <LeftHand count={count} stateCount={stateCount} step={step} />
      <hr/>
      <StepConfig step={step} onStepChange={onStepChange}/>
    </div>
  );
}

export default App;
