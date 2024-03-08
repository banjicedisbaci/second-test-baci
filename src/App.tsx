import React, { useState } from 'react';

function App() {
  const [input, setInput] = useState('');

  const display = (value) => {
    setInput(input + value);
  };

  const clearScreen = () => {
    setInput('');
  };

  const calculate = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput('Error');
    }
  };

  return (
    <div className="container">
      <div className="calculator">
        <div>
          <input className="display-box" type="text" value={input} disabled />
        </div>
        <div>
          <input className="button" type="button" value="1" onClick={() => display('1')} />
          <input className="button" type="button" value="2" onClick={() => display('2')} />
          <input className="button" type="button" value="3" onClick={() => display('3')} />
          <input className="button" type="button" value="/" onClick={() => display('/')} />
        </div>
        <div>
          <input className="button" type="button" value="4" onClick={() => display('4')} />
          <input className="button" type="button" value="5" onClick={() => display('5')} />
          <input className="button" type="button" value="6" onClick={() => display('6')} />
          <input className="button" type="button" value="-" onClick={() => display('-')} />
        </div>
        <div>
          <input className="button" type="button" value="7" onClick={() => display('7')} />
          <input className="button" type="button" value="8" onClick={() => display('8')} />
          <input className="button" type="button" value="9" onClick={() => display('9')} />
          <input className="button" type="button" value="+" onClick={() => display('+')} />
        </div>
        <div>
          <input className="button" type="button" value="." onClick={() => display('.')} />
          <input className="button" type="button" value="0" onClick={() => display('0')} />
          <input style={{ backgroundColor: 'white', color: 'black' }} className="button" type="button" value="C" onClick={clearScreen} />
          <input className="button" type="button" value="*" onClick={() => display('*')} />
        </div>
      </div>
      <input className="calculate" type="button" value="=" onClick={calculate} />
    </div>
  );
}

export default App;