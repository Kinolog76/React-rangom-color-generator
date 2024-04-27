import { useState } from "react";

function RandomColor() {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");
  const [copiAnimation, setcopiAnimation] = useState(false);

  function triggerFlashAnimation() {
    setcopiAnimation(true);
    setTimeout(() => setcopiAnimation(false), 500);
  }
  function setTypeOfColorFunc(typeColor) {
    setTypeOfColor(typeColor);
    typeColor === "hex" ? handleCreateRandomHexColor() : handleCreateRandomRgbColor();
  }
  function randomColorUtility(length) {
    return Math.floor(Math.random() * length);
  }

  function handleCreateRandomHexColor() {
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtility(hex.length)];
    }
    setColor(hexColor);
  }
  function handleCreateRandomRgbColor() {
    const r = randomColorUtility(256);
    const g = randomColorUtility(256);
    const b = randomColorUtility(256);
    setColor(`rgb(${r}, ${g}, ${b})`);
  }

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        padding: "10px",
        background: color,
      }}
      className="app-container"
    >
      <h1 className="mx-auto max-w-fit px-3 pb-1 rounded-lg bg-black text-white text-center font-bold pt-2 text-4xl">React Random Color Generator</h1>
      <div className="max-w-fit my-6 flex flex-wrap justify-center gap-x-2 gap-y-3 mx-auto text-black">
        <button className="px-2 bg-slate-500 font-semibold rounded-md" onClick={() => setTypeOfColorFunc("hex")}>
          Generate HEX Color
        </button>
        <button className="px-2 bg-slate-500 font-semibold rounded-md" onClick={() => setTypeOfColorFunc("rgb")}>
          Generate RGB Color
        </button>
        <button className="px-2 bg-slate-500 font-semibold rounded-md" onClick={typeOfColor === "hex" ? handleCreateRandomHexColor : handleCreateRandomRgbColor}>
          Generate Random Color
        </button>
      </div>

      <div className="mx-auto sm:mt-44 lg:mt-52 text-white">
        <h3 className="mx-auto max-w-fit px-3 pb-1 rounded-lg bg-black text-center font-bold text-4xl">{typeOfColor === "hex" ? "HEX color" : "RGB color"}</h3>
        <div
          onClick={() => {
            navigator.clipboard.writeText(color);
            triggerFlashAnimation();
          }}
          className={`copyColor cursor-pointer mx-auto mt-20 max-w-fit px-3 pb-3 rounded-lg bg-black text-center font-bold text-5xl ${copiAnimation ? "animate-bounce" : ""}`}
        >
          <p className="block pb-3">Copy color:</p> <hr className="pb-2"></hr> 👉{color}👈
        </div>
      </div>
    </div>
  );
}

export default RandomColor;
