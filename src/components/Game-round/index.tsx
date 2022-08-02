import React, { FC } from 'react';
import { GameAnswerOptions, GameQuestion, GameRoundHeader } from '..';
import { IPicture } from '../../models';
import { Variant } from '../../constants';
import { Wrapper } from './styles';

interface GameRoundProps extends IPicture {
  gameVariant: string;
  setNextRound: () => void;
}

const GameRound: FC<GameRoundProps> = ({
  imageNum,
  // name,
  // year,
  author,
  gameVariant,
  setNextRound,
}) => {
  return (
    <Wrapper>
      <GameRoundHeader />
      <GameQuestion author={author} imageNum={imageNum} isPic={gameVariant === Variant.PIC} />
      <GameAnswerOptions imageNum={imageNum} isPic={gameVariant === Variant.PIC} />
      <button onClick={setNextRound}>next</button>
    </Wrapper>
  );
};

export default GameRound;
