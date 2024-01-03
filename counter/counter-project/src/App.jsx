import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {

 let [count , setCounter] = useState(10);

 

  const addValue = () => {
    count = count+1;
    if(count <= 20){
      setCounter(count);
    }
    else{
      count = 20;
      setCounter(count)
    }
  }
  const removeValue = () => {
    count = count-1;
    if(count >= 0){
      setCounter(count);
    }
    else{
      count = 0;
      setCounter(count)
    }
  }

  return (
    <>
      <h1>chai aur reat</h1>
      <h2>Counter Value: {count}</h2>

      <button onClick={addValue} >Add {count}</button>
      <br />
      <br />
      <button onClick={removeValue}>Remove </button>
    </>
  );
}

export default App;
