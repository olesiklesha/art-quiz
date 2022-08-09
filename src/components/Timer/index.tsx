import React, { FC, useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../../store';

interface TimerProps {
  finishRound: (answer: string, correctAnswer: string) => void;
  isTimerActive: boolean;
}

let interval: NodeJS.Timer;

const Timer: FC<TimerProps> = ({ finishRound, isTimerActive }) => {
  const [{ settings }] = useContext(GlobalContext);
  const { isTimeGame, duration } = settings;
  const [seconds, setSeconds] = useState(duration);
  console.log(isTimerActive);
  // const [isActive, setIsActive] = useState(isTimerActive);

  // const toggleIsActive = () => {
  //   setIsActive(!isActive);
  // };
  //
  // const reset = () => {
  //   setSeconds(duration);
  //   setIsActive(true);
  // };

  useEffect(() => {
    if (isTimerActive) {
      if (seconds === 0) {
        clearInterval(interval);
        finishRound(String(seconds), String(seconds + 1));
        setSeconds(duration);
      }
      interval = setInterval(() => {
        setSeconds((seconds) => seconds - 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isTimerActive, seconds, finishRound, duration]);

  return <>{isTimeGame && <div>it is timer {seconds}s</div>}</>;
};

export default Timer;
