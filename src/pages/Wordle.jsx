import { useState } from "react";
import '../styles/Wordle.css'

export default function Wordle() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [timerMode, setTimerMode] = useState("no-timer");

  if (!isPlaying) {
    return (
      <div className="setup-container">
        <h2 >Wordle</h2>
        <p >
          Adivina la palabra del día en la menor cantidad de intentos posible.
        </p>

        <div>
          <label>
            Modo de juego:
          </label>
          <div >
            <label>
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
        >
          Comenzar
        </button>
      </div>
    );
  }


  return (
    <div className="p-4">
      <h2>Juego Wordle</h2>
      <p>Modo: {timerMode === "timer" ? "Con timer" : "Sin timer"}</p>

      {/* Aquí iría tu lógica de Wordle original */}
    </div>
  );
}
