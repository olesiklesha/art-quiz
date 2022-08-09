import React, { FC, useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../../store';
import { Time } from './styles';

interface TimerProps {
  finishRound: (answer: string, correctAnswer: string) => void;
  isTimerActive: boolean;
}

let interval: NodeJS.Timer;

const Timer: FC<TimerProps> = ({ finishRound, isTimerActive }) => {
  const [{ settings }] = useContext(GlobalContext);
  const { isTimeGame, duration } = settings;
  const [seconds, setSeconds] = useState(duration);

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
      setSeconds(duration);
    }
    return () => clearInterval(interval);
  }, [isTimerActive, seconds, finishRound, duration]);

  return <>{isTimeGame && <Time>{seconds}s</Time>}</>;
};

export default Timer;
