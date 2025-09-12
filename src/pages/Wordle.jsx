import { useState } from "react";

export default function Wordle() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [timerMode, setTimerMode] = useState("no-timer");

  if (!isPlaying) {
    return (
      <div className="bg-white shadow-xl rounded-2xl p-6 w-96 mx-auto mt-20">
        <h2 className="text-xl font-bold mb-2 text-center">Wordle</h2>
        <p className="text-gray-600 text-sm mb-4 text-center">
          Adivina la palabra del día en la menor cantidad de intentos posible.
        </p>

        <div className="mb-4">
          <label className="block mb-2 font-semibold text-gray-700">
            Modo de juego:
          </label>
          <div className="flex gap-4">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                value="no-timer"
                checked={timerMode === "no-timer"}
                onChange={(e) => setTimerMode(e.target.value)}
              />
              Sin Timer
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                value="timer"
                checked={timerMode === "timer"}
                onChange={(e) => setTimerMode(e.target.value)}
              />
              Con Timer
            </label>
          </div>
        </div>

        <button
          onClick={() => setIsPlaying(true)}
          className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Comenzar
        </button>
      </div>
    );
  }


  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Juego Wordle</h2>
      <p>Modo: {timerMode === "timer" ? "Con timer" : "Sin timer"}</p>

      {/* Aquí iría tu lógica de Wordle original */}
    </div>
  );
}
