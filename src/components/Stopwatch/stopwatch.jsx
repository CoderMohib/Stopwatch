import { useState } from "react";
import Laps from "./Laps";
export function formatTime(value) {
  return value < 10 ? `0${value}` : value;
}
function Stopwatch() {
  const [time, setTime] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isRunning, setIsRunning] = useState(false);
  const [intervalId, setIntervalId] = useState(null);
  const [lapse, setLapse] = useState([]);

  function runningTime() {
    setTime((prevTime) => {
      let { hours, minutes, seconds } = prevTime;

      seconds += 1;

      if (seconds === 60) {
        seconds = 0;
        minutes += 1;
      }

      if (minutes === 60) {
        minutes = 0;
        hours += 1;
      }

      return { hours, minutes, seconds };
    });
  }
  function handleStartResume() {
    if (!isRunning) {
      setIsRunning(true);
      const id = setInterval(runningTime, 1000);
      setIntervalId(id);
    }
  }
  function handleResetRunning() {
    clearInterval(intervalId);
    setIntervalId(null);
    setIsRunning(false);
    setTime({
      hours: 0,
      minutes: 0,
      seconds: 0,
    });
    setLapse([]);
  }
  function handlePause() {
    if (isRunning) {
      setIsRunning(false);
      clearInterval(intervalId);
      setIntervalId(null);
    }
  }
  function handleLap() {
    if (isRunning) {
      setLapse((prevLapse) => [...prevLapse, time]);
    }
  }
  return (
    <div className="stop-watch_con">
      <h1>Stopwatch</h1>
      <div className="stop-watch">
        <p className="time">
          {formatTime(time.hours)}:{formatTime(time.minutes)}:
          {formatTime(time.seconds)}
        </p>
      </div>
      <div className="buttons">
        {isRunning ? (
          <button onClick={handlePause}>Pause</button>
        ) : (
          <button onClick={handleStartResume}>
            {time.hours === 0 && time.minutes === 0 && time.seconds === 0
              ? "Play"
              : "Resume"}
          </button>
        )}
        <button onClick={handleResetRunning}>Reset</button>
        <button onClick={handleLap}>Lap</button>
      </div>
      <Laps lapse={lapse} />
    </div>
  );
}
export default Stopwatch;
