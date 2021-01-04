import React, { useState } from 'react';
import './App.css';
import decoder from './logic/decoder';
import encoder from './logic/encoder';

function App() {
  const [plain, setPlain] = useState<string>("")
  const [encoded, setEncoded] = useState<string>("")
  console.log("rerender");
  
  return (
    <div className="App">
      <h1>Base 2137</h1>
      <p>Plain text:</p>
      <textarea 
        className={`textarea${plain==="PARITY ERROR!"?" error":""}`}
        value={plain} 
        onChange={(event)=>{
          setPlain(event.target.value);
          setEncoded(encoder(event.target.value));
        }}
        rows={5}
      />
      <br/><br/>
      <p>Base2137-encoded text:</p>
      <textarea 
        className="textarea"
        value={encoded} 
        onChange={(event)=>{
          setEncoded(event.target.value);
          setPlain(decoder(event.target.value));
        }}
        rows={5}/>
    </div>
  );
}

export default App;
