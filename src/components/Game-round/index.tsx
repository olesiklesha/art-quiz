import React from 'react';
import { GameAnswerOptions, GameQuestion } from '../index';

const GameRound = () => {
  return (
    <div>
      <GameQuestion />
      <GameAnswerOptions />
    </div>
  );
};

export default GameRound;
