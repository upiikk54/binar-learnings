import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import Button from "./components/Button";
import { ACTIONS } from "./libs/const";

function App() {

  const [valueOne, setValueOne] = useState();
  const [valueTwo, setValueTwo] = useState();
  const [result, setResult] = useState(0);


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Simple Calculator
        </p>

        <form>
          <label>
            value 1: <input type="number" value={valueOne} onChange={(e) => setValueOne(e.target.value)}/>
            <br></br>
            value 2: <input type="number" value={valueTwo} onChange={(e) => setValueTwo(e.target.value)} />
          </label>
        </form>
        <div>
            <Button
              valueOne={valueOne}
              valueTwo={valueTwo}
              setResult={setResult}
              action={ACTIONS.MULTIPLY}
              text="Multiply"
            />
            <Button
              valueOne={valueOne}
              valueTwo={valueTwo}
              setResult={setResult}
              action={ACTIONS.DECREMENT}
              text="Minus"
            />
            <Button
              valueOne={valueOne}
              valueTwo={valueTwo}
              setResult={setResult}
              action={ACTIONS.INCREMENT}
              text="Plus"
            />
          </div>
        <p>
          <h1>{result}</h1>
        </p>
      </header>
    </div>
  );
}

export default App;
