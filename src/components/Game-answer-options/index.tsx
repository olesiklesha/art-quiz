import React, { FC } from 'react';
import { getAnswerOptions } from '../../utils';
import appData from '../../data/AppData.json';
import { IAppData } from '../../models';
import { AnswerOptionsBtn, AnswersContainer, ImageAnswerOptionBtn } from './styles';

const { all: data } = appData as IAppData;

interface GameAnswerOptionsProps {
  isPic: boolean;
  imageNum: string;
}

const GameAnswerOptions: FC<GameAnswerOptionsProps> = ({ imageNum, isPic }) => {
  const answerOptions = getAnswerOptions(Number(imageNum));
  return (
    <AnswersContainer>
      {answerOptions.map((el) => {
        if (isPic) {
          return <AnswerOptionsBtn key={Date.now() + el}>{data[el].author}</AnswerOptionsBtn>;
        } else {
          return <ImageAnswerOptionBtn num={el} key={Date.now() + el} />;
        }
      })}
    </AnswersContainer>
  );
};

export default GameAnswerOptions;
