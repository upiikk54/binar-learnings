import logo from './logo.svg';
import './App.css';
import { useRef, useState } from "react";
import Button from "./components/Button";
import { ACTIONS } from "./libs/const";

function App() {

  const valueOne = useRef(0);
  const valueTwo = useRef(0);

  // const [valueOne, setValueOne] = useState(0);
  // const [valueTwo, setValueTwo] = useState(0);
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
            value 1: <input type="number" ref={valueOne} />
            <br></br>
            value 2: <input type="number" ref={valueTwo} />
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
        <h1>{result}</h1>
      </header>
    </div>
  );
}

export default App;
