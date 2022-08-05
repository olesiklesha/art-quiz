import React, { FC, useContext } from 'react';
import { GlobalContext } from '../../store';

interface TimerProps {
  finishRound: (answer: string, correctAnswer: string) => void;
}

const Timer: FC<TimerProps> = ({ finishRound }) => {
  const [{ settings }] = useContext(GlobalContext);
  const { isTimeGame, duration } = settings;
  return <>{isTimeGame && <div>it is timer {duration}</div>}</>;
};

export default Timer;
