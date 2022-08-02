import React, { FC } from 'react';
import { GameAnswerOptions, GameQuestion, GameRoundHeader } from '..';
import { IPicture } from '../../models';
import { Variant } from '../../constants';
import { Wrapper } from './styles';

interface GameRoundProps extends IPicture {
  gameVariant: string;
  setNextRound: () => void;
  check: (answer: string, correctAnswer: string) => void;
}

const GameRound: FC<GameRoundProps> = ({
  imageNum,
  // name,
  // year,
  author,
  gameVariant,
  setNextRound,
  check,
}) => {
  return (
    <Wrapper>
      <GameRoundHeader />
      <GameQuestion author={author} imageNum={imageNum} isPic={gameVariant === Variant.PIC} />
      <GameAnswerOptions imageNum={imageNum} isPic={gameVariant === Variant.PIC} check={check} />
      <button onClick={setNextRound}>next</button>
    </Wrapper>
  );
};

export default GameRound;
