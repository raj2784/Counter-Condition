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
        Counter : {counter}
        <br />
        <br />
        <button onClick={increaseValue}>+ Increase</button>
        <br />
        <button onClick={decreaseValue}>- Decrease</button>
        <br />
        counts : {counter}
      </div>
    </>
  );
}

export default App;
