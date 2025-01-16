import { formatTime } from "./stopwatch";
export default function Laps({ lapse }) {
  return (
    <div className="timeLpase-con">
      {lapse.length === 0 ? (
        <p className="no-lap">No laps recorded yet</p>
      ) : (
        <ul className="timeLpase">
          {lapse.map((lap, index) => (
            <li key={index}>
              <p>Lap {index + 1}</p> {formatTime(lap.hours)}:
              {formatTime(lap.minutes)}:{formatTime(lap.seconds)}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
