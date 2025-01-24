import { formatTime } from "./stopwatch";
export default function Laps({ lapse, setTimelapse }) {
  function handleRemoveLapse(index) {
    setTimelapse((newlapse) => newlapse.filter((_, i) => i !== index));
  }
  return (
    <div className="timeLpase-con">
      {lapse.length === 0 ? (
        <p className="no-lap">No laps recorded yet</p>
      ) : (
        <ul className="timeLpase">
          {lapse.map((lap, index) => (
            <li key={index}>
              <h3>Lap {index + 1}</h3> {formatTime(lap.hours)}:
              {formatTime(lap.minutes)}:{formatTime(lap.seconds)}
              <button
                className="lapse-remove"
                onClick={()=>handleRemoveLapse(index)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
