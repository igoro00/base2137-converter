import React, { useState } from 'react';
import './App.css';
import encoder from './logic/encoder';

function App() {
  const [inputValue, setInputValue] = useState<string>("")
  
  return (
    <div className="App">
      <input type="text" onChange={(event)=>setInputValue(event.target.value)} /><br/><br/>
      <h3>{JSON.stringify(encoder(inputValue))}</h3>
    </div>
  );
}

export default App;
