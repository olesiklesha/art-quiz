import React, { FC } from 'react';
import { GameAnswerOptions, GameQuestion } from '../index';
import { IPicture } from '../../models';

interface GameRoundProps extends IPicture {
  gameVariant: string;
  setNextRound: () => void;
}

const GameRound: FC<GameRoundProps> = ({
  imageNum,
  name,
  year,
  author,
  gameVariant,
  setNextRound,
}) => {
  return (
    <div>
      <GameQuestion author={author} imageNum={imageNum} isPic={gameVariant === 'pic'} />
      <GameAnswerOptions />
      <button onClick={setNextRound}>next</button>
    </div>
  );
};

export default GameRound;
