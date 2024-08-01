import "./App.css";
import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="flex justify-center">
        <div className="flex justify-center gap-2 px-3 py-1 border-2 border-black bg-white w-fit">
          <button
            type="button"
            className="bg-black h-5 w-5 rounded-md"
            onClick={() => setColor("black")}
          ></button>
          <button
            type="button"
            className="bg-green-800 h-5 w-5 rounded-md"
            onClick={() => setColor("green")}
          ></button>
          <button
            type="button"
            className="bg-blue-800 h-5 w-5 rounded-md"
            onClick={() => setColor("blue")}
          ></button>
          <button
            type="button"
            className="bg-yellow-400 h-5 w-5 rounded-md"
            onClick={() => setColor("yellow")}
          ></button>
          <button
            type="button"
            className="bg-orange-500 h-5 w-5 rounded-md"
            onClick={() => setColor("orange")}
          ></button>
          <button
            type="button"
            className="bg-purple-800 h-5 w-5 rounded-md"
            onClick={() => setColor("purple")}
          ></button>
          <button
            type="button"
            className="bg-pink-700 h-5 w-5 rounded-md"
            onClick={() => setColor("palevioletred")}
          ></button>
          <button
            type="button"
            className="bg-gray-500 h-5 w-5 rounded-md"
            onClick={() => setColor("grey")}
          ></button>
        </div>
      </div>
    </div>
  );
}

export default App;
