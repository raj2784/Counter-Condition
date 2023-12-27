import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(15);

  const increaseValue = () => {
    if (counter === 20) {
      setCounter(20);
    } else {
      setCounter(counter + 1);

      //if wanted to add on multiple times
      // setCounter((prevCounter) => prevCounter + 1);
      // setCounter((prevCounter) => prevCounter + 1);
      // setCounter((prevCounter) => prevCounter + 1);
    }
  };

  const decreaseValue = () => {
    //if else condition

    // if (counter === 1) {
    //   setCounter(1);
    // } else {
    //   setCounter(counter - 1);
    // }

    //shorthand if else condition
    counter === 1 ? setCounter(1) : setCounter(counter - 1);
  };

  return (
    <>
      <div className="App-header">
        <h3>
          Counter with Condition and (lowest up to = 1 | highest up to = 20)
        </h3>
        Counter : {counter}
        <br />
        <br />
        <button className="counterBtn" onClick={increaseValue}>
          + Increase
        </button>
        <br />
        <button className="counterBtn" onClick={decreaseValue}>
          - Decrease
        </button>
        <br />
        counts : {counter}
      </div>
    </>
  );
}

export default App;
