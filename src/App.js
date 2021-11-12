import {useState} from "react";
import './App.css';

function App() {

  //declaring usestate

  const [increment, setIncrement] =useState(0);

  //A function to increase value by 1

  const handleIncrement = () => {
    setIncrement(increment + 1);
  }


   //A function to decrease value by 1

  const handleDecrement = () => {
    setIncrement(increment - 1);
  }

  return (
    <div className="App">
      <div className="Container">
        <h1>{increment}</h1>
        <div className="btn">
          <button onClick={handleDecrement}>Minus</button>
          <button onClick={handleIncrement}>Add</button>
        </div>
      </div>
    </div>
  );
}

export default App;
