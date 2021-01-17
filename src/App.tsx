import React, { useState } from 'react';
import { DecimalAge } from './DecimalAge'
import './css/App.css';

const App: React.FC = () => {
  //States
  const [date, setDate] = useState('2021-01-01');
  const [submitBool, setSubmitBool] = useState(false);
  const [err, setErr] = useState('');

  //Handle data
  const handleChange = (val: string) => {
    setDate(val);
    setSubmitBool(false);
  };
  const handleSubmit = () => {
    if (date.length !== 10) return setErr('Invalid Date');
    setSubmitBool(true);
    setErr('');
  };

	return(
		<div className="App">
      <input 
        type="date"
        value={date}
        onChange={(e) => {handleChange(e.target.value)}}
      ></input>
      {submitBool 
      ? <DecimalAge date={date} /> 
      : <button id="submit" onClick={() => handleSubmit()}>Submit</button>
      }
      <h1 className="errorTag">{ err }</h1>
		</div>
	);
};

export default App;

