import { useState } from "react";

function App() {
  const [color, setColor] = useState("lavender");

  const colors = [
    { name: "Red", code: "red", textColor: "white" },
    { name: "Green", code: "green", textColor: "white" },
    { name: "Blue", code: "blue", textColor: "white" },
    { name: "Violet", code: "violet", textColor: "white" },
    { name: "White", code: "white", textColor: "black" },
    { name: "Yellow", code: "yellow", textColor: "black" },
    { name: "Olive", code: "olive", textColor: "white" },
    { name: "Gray", code: "gray", textColor: "white" },
    { name: "Pink", code: "pink", textColor: "black" },
    { name: "Black", code: "black", textColor: "white" },
    { name: "Lavender", code: "lavender", textColor: "black" },
  ];

  // Random color generator
  const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * colors.length);
    setColor(colors[randomIndex].code);
  };

  return (
    <div
      className="w-full h-screen flex flex-col items-center justify-center transition-colors duration-500"
      style={{ backgroundColor: color }}
    >
      
      <h1
        className="text-4xl font-bold mb-6"
        style={{ color: color === "white" ? "black" : "white" }}
      >
        Current Color: {color.charAt(0).toUpperCase() + color.slice(1)}
      </h1>

      
      <div
        className="w-32 h-32 mb-6 rounded-lg shadow-md transition-all duration-500"
        style={{ backgroundColor: color, border: "2px solid white" }}
      ></div>

     
      <div className="grid grid-cols-3 gap-3 mb-8">
        {colors.map((col) => (
          <button
            key={col.name}
            onClick={() => setColor(col.code)}
            className={`outline-none px-4 py-2 rounded-full text-${col.textColor} shadow-lg transition-all duration-300 hover:scale-110 hover:ring-2 ring-offset-2`}
            style={{ backgroundColor: col.code }}
          >
            {col.name}
          </button>
        ))}
      </div>

      {/* Random Color Button */}
      <button
        onClick={getRandomColor}
        className="px-6 py-3 bg-indigo-600 text-white rounded-full shadow-lg hover:scale-105 hover:bg-indigo-700 transition-transform duration-300"
      >
        Random Color
      </button>
    </div>
  );
}

export default App;
