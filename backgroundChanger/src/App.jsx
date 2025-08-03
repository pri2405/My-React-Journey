import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <h1 className="h-screen flex justify-center items-center text-6xl font-bold text-white">Hello, I am Payal</h1>
        <div className="fixed flex flex-wrap justify-center bottom-12 absolute inset-x-0 px-2 bg-silver-900">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button
              onClick={() => setColor("red")}
              className="outline-none px-4 py-1 rounded-full shadow-lg"
              style={{ backgroundColor: "red" }}
            >
              Red
            </button>
            <button
              onClick={() => setColor("yellow")}
              className="outline-none px-4 py-1 rounded-full shadow-lg"
              style={{ backgroundColor: "yellow" }}
            >
              Yellow
            </button>
            <button
              onClick={() => setColor("green")}
              className="outline-none px-4 py-1 rounded-full shadow-lg"
              style={{ backgroundColor: "green" }}
            >
              Green
            </button>
            <button
              onClick={() => setColor("purple")}
              className="outline-none px-4 py-1 rounded-full shadow-lg"
              style={{ backgroundColor: "purple" }}
            >
              Purple
            </button>
            <button
              onClick={() => setColor("orange")}
              className="outline-none px-4 py-1 rounded-full shadow-lg"
              style={{ backgroundColor: "orange" }}
            >
              Orange
            </button>
            <button
              onClick={() => setColor("skyblue")}
              className="outline-none px-4 py-1 rounded-full shadow-lg"
              style={{ backgroundColor: "skyblue" }}
            >
              Sky blue
            </button>
            <button
              onClick={() => setColor("olive")}
              className="outline-none px-4 py-1 rounded-full shadow-lg"
              style={{ backgroundColor: "olive" }}
            >
               Olive
            </button>
            <button
              onClick={() => setColor("pink")}
              className="outline-none px-4 py-1 rounded-full shadow-lg"
              style={{ backgroundColor: "pink" }}
            >
              Pink
            </button>
            <button
              onClick={() => setColor("indigo")}
              className="outline-none px-4 py-1 rounded-full shadow-lg"
              style={{ backgroundColor: "indigo" }}
            >
              Indigo
            </button>
            <button
              onClick={() => setColor("magenta")}
              className="outline-none px-4 py-1 rounded-full shadow-lg"
              style={{ backgroundColor: "magenta" }}
            >
              Magenta
            </button>
            <button
              onClick={() => setColor("gray")}
              className="outline-none px-4 py-1 rounded-full shadow-lg"
              style={{ backgroundColor: "gray" }}
            >
              Gray
            </button>
            <button
              onClick={() => setColor("blue")}
              className="outline-none px-4 py-1 rounded-full shadow-lg"
              style={{ backgroundColor: "blue" }}
            >
              Blue
            </button>
            <button
              onClick={() => setColor("brown")}
              className="outline-none px-4 py-1 rounded-full shadow-lg"
              style={{ backgroundColor: "brown" }}
            >
              Brown
            </button>
            <button
              onClick={() => setColor("black")}
              className="outline-none px-4 py-1 rounded-full shadow-lg"
              style={{ backgroundColor: "black" }}
            >
              Black
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
