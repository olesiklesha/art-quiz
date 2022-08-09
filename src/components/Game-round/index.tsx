import React, { FC } from 'react';
import { GameAnswerOptions, GameQuestion, GameRoundHeader } from '..';
import { IPicture } from '../../models';
import { Variant } from '../../constants';
import { Wrapper } from './styles';

type GameRoundProps = Omit<IPicture, 'name' | 'year'> & {
  gameVariant: string;
  check: (answer: string, correctAnswer: string) => void;
  isTimerActive: boolean;
};

const GameRound: FC<GameRoundProps> = ({ imageNum, author, gameVariant, check, isTimerActive }) => {
  return (
    <Wrapper>
      <GameRoundHeader finishRound={check} isTimerActive={isTimerActive} />
      <GameQuestion author={author} imageNum={imageNum} isPic={gameVariant === Variant.PIC} />
      <GameAnswerOptions imageNum={imageNum} isPic={gameVariant === Variant.PIC} check={check} />
    </Wrapper>
  );
};

export default GameRound;
