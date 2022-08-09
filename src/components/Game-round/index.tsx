import React, { FC } from 'react';
import { GameAnswerOptions, GameQuestion, GameRoundHeader } from '..';
import { IPicture } from '../../models';
import { Variant } from '../../constants';
import { Wrapper } from './styles';

interface GameRoundProps extends IPicture {
  gameVariant: string;
  // setNextRound: () => void;
  check: (answer: string, correctAnswer: string) => void;
  isTimerActive: boolean;
}

const GameRound: FC<GameRoundProps> = ({
  imageNum,
  // name,
  // year,
  author,
  gameVariant,
  // setNextRound,
  check,
  isTimerActive,
}) => {
  return (
    <Wrapper>
      <GameRoundHeader finishRound={check} isTimerActive={isTimerActive} />
      <GameQuestion author={author} imageNum={imageNum} isPic={gameVariant === Variant.PIC} />
      <GameAnswerOptions imageNum={imageNum} isPic={gameVariant === Variant.PIC} check={check} />
    </Wrapper>
  );
};

export default GameRound;
