import React, { FC, useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../../store';

interface TimerProps {
  finishRound: (answer: string, correctAnswer: string) => void;
}

let interval: NodeJS.Timer;

const Timer: FC<TimerProps> = ({ finishRound }) => {
  const [{ settings }] = useContext(GlobalContext);
  const { isTimeGame, duration } = settings;
  const [seconds, setSeconds] = useState(duration);
  const [isActive, setIsActive] = useState(true);

  const toggleIsActive = () => {
    setIsActive(!isActive);
  };

  const reset = () => {
    setSeconds(duration);
    setIsActive(true);
  };

  useEffect(() => {
    if (isActive) {
      if (seconds === 0) {
        clearInterval(interval);
        finishRound(String(seconds), String(seconds + 1));
        reset();
      }
      interval = setInterval(() => {
        setSeconds((seconds) => seconds - 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds, finishRound]);

  return <>{isTimeGame && <div>it is timer {seconds}s</div>}</>;
};

export default Timer;
