import { useCallback, useState, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setpassword] = useState("");

  // refuse Hook
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let strData = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    if (numberAllowed) {
      strData = strData + "0123456789";
    }
    if (charAllowed) {
      strData = strData + "!@#$%^&*()~";
    }

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * strData.length + 1);
      pass += strData.charAt(char);
    }
    setpassword(pass);
  }, [length, numberAllowed, charAllowed, setpassword]);

  const copyToClipBoard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,8);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, charAllowed, numberAllowed, passwordGenerator]);

  return (
    <>
      <div className="w-full max-w-md mx-auto rounded-lg px-4 py-8  text-white bg-gray-800 ">
        Password Generator
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3 text-black"
            placeholder="password"
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyToClipBoard}
            className="outline-none bg-blue-700 text-white px-3 py-0.5 "
          >
            Copy
          </button>
        </div>
        <div className="text-sm flex gap-x-2">
          <div className="flex items-center gap-x-1 ">
            <input
              type="range"
              min={5}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label className="text-yellow">Length:{length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
             
              type="checkBox"
              defaultChecked={numberAllowed}
              onClick={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label>Number</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkBox"
              defaultChecked={charAllowed}
              onClick={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label>Character</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
