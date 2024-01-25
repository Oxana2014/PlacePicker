import { useEffect, useState } from "react";

const TIMER = 3000;

export default function DeleteConfirmation({ onConfirm, onCancel }) {
  useEffect(() => {
    console.log("TIMER SET");
    const timer = setTimeout(() => {
      onConfirm();
    }, TIMER);
    return () => {
      console.log("Cleaning up timer");
      clearTimeout(timer);
    };
  }, []);

  const [remainingTime, setRemainingTime] = useState(TIMER);

  useEffect(() => {
  const interval = setInterval(() => {
    console.log("INTERVAl")
      setRemainingTime((prevTime) => prevTime - 100);
   
    }, 100);
    return () => {
      clearInterval(interval) //executes only before closing the component bacause of empty dependencies array
    }
  }, []);

  return (
    <div id="delete-confirmation">
      <h2>Are you sure?</h2>
      <p>Do you really want to remove this place?</p>
      <div id="confirmation-actions">
        <button onClick={onCancel} className="button-text">
          No
        </button>
        <button onClick={onConfirm} className="button">
          Yes
        </button>
      </div>
      <progress value={remainingTime} max={TIMER} />
    </div>
  );
}
