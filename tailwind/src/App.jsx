import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Cards from "./component/Cards/";
import Crd2 from "./component/Crd2/";

function App() {
  return (
    <>
      <h1 className="bg-green-400 p-5 mb-5">Tailwind</h1>

      <Cards name="shifa" />

      <Crd2 />
    </>
  );
}

export default App;
