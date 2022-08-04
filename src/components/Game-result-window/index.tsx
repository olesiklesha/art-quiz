import React, { FC, useCallback } from 'react';
import { ResultIcon, ResultTitle, SubTitle, TextContainer } from './styles';
import { R_QUANTITY } from '../../constants';
import { Btn } from '../Answer-result-window/styles';

interface GameResultProps {
  result: boolean[];
  onAction: () => void;
}

const GameResultWindow: FC<GameResultProps> = ({ result, onAction }) => {
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
        {res > 0 && <SubTitle result={res}>Congratulations!</SubTitle>}
      </TextContainer>
      <Btn accent={true} onClick={onAction}>
        Home
      </Btn>
    </>
  );
};

export default GameResultWindow;
