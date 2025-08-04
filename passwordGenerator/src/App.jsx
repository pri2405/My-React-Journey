import { useCallback, useEffect, useRef, useState } from "react";

import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "~`!@#$%^&*()_-+=[]{}?/|"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()
    passwordRef.current?.setSlectionRange(0,101)
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGenerator()
  },[length, numberAllowed, charAllowed, passwordGenerator])

  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="max-w-md w-full mx-auto shadow-md rounded-lg px-4 py-6  my-8 text-orange-500 bg-gray-700 border border-blue-500 shadow-lg shadow-blue-500">
        <h1 className="text-4xl text-white text-center font-bold my-5">
          Password Generator
        </h1>
        <div className="flex shadow rounded-lg overflow-hidden my-4 m-2">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3 bg-gray-300 text-black"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button onClick={copyPasswordToClipboard} className="bg-blue-500 text-white outline-none px-3 py-0.5 shrink-0">
            copy
          </button>
        </div>
        <div className="flex items-center justify-center">
          <div className="text-sm space-y-4 p-2">
          <div className="flex justify-center gap-y-3 gap-x-2">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label htmlFor="">Length: {length}</label>
          </div>
          <div className="flex justify-center gap-y-3 gap-x-2">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev)
              }}
            />
            <label htmlFor="numberInput"> Numbers</label>
          </div>
          <div className="flex justify-center gap-y-3 gap-x-2">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="charInput"
              onChange={() => {
                setCharAllowed((prev) => !prev)
              }}
            />
            <label htmlFor="charInput"> Characters</label>
          </div>
        </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default App;
