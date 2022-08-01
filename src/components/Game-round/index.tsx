import React, { FC } from 'react';
import { GameAnswerOptions, GameQuestion } from '..';
import { IPicture } from '../../models';
import { Variant } from '../../constants';

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
      <GameQuestion author={author} imageNum={imageNum} isPic={gameVariant === Variant.PIC} />
      <GameAnswerOptions author={author} imageNum={imageNum} isPic={gameVariant === Variant.PIC} />
      <button onClick={setNextRound}>next</button>
    </div>
  );
};

export default GameRound;
