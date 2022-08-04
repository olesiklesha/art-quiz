import React, { FC, useCallback } from 'react';
import { ResultIcon, ResultTitle, SubTitle, TextContainer } from './styles';
import { R_QUANTITY } from '../../constants';

interface GameResultProps {
  result: boolean[];
}

const GameResultWindow: FC<GameResultProps> = ({ result }) => {
  const res = result.filter((el) => el).length;
  const getResultText = useCallback(() => {
    if (res === R_QUANTITY) return 'Grand result';
    if (res > 0) return `${res}/10`;
    return 'Game over';
  }, [res]);

  return (
    <>
      <ResultIcon result={res} />
      <TextContainer>
        <ResultTitle result={res}>{getResultText()}</ResultTitle>
        <SubTitle result={res}>{res === 0 ? 'Play again?' : 'Congratulations!'}</SubTitle>
      </TextContainer>
    </>
  );
};

export default GameResultWindow;
