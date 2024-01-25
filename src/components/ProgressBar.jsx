import {useState, useEffect} from 'react'

export default function ProgressBar({timer}) {
    const [remainingTime, setRemainingTime] = useState(timer);

    useEffect(() => {
    const interval = setInterval(() => {
      console.log("INTERVAl")
        setRemainingTime((prevTime) => prevTime - 100);
     
      }, 100);
      return () => {
        clearInterval(interval) //executes only before closing the component bacause of empty dependencies array
      }
    }, []);

return <progress value={remainingTime} max={timer} />
}