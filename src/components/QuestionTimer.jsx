import { useEffect, useState } from "react";

function QuestionTimer({ timeout, onTimeOut}) {
  const [remainingTime, setRemainingTime] = useState(timeout);
  
  //Setting Timeout
  useEffect(() => {
    setTimeout(onTimeOut, timeout); 
  }, [timeout, onTimeOut]);

  //Setting Interval
  useEffect(() => {
    setInterval(() => {
      setRemainingTime((prevRemainingTime) => prevRemainingTime - 100);
    }, 100);
  }, []);

  return (
    <progress id="question-time" max={timeout} value={remainingTime}/>
  )
}

export default QuestionTimer