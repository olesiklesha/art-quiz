import React, { FC, memo } from 'react';
import { getAnswerOptions } from '../../utils';
import appData from '../../data/AppData.json';
import { IAppData } from '../../models';
import { AnswerOptionsBtn, AnswersContainer, ImageAnswerOptionBtn } from './styles';

const { all: data } = appData as IAppData;

interface GameAnswerOptionsProps {
  isPic: boolean;
  imageNum: string;
  check: (answer: string, correctAnswer: string) => void;
}

const GameAnswerOptions: FC<GameAnswerOptionsProps> = ({ imageNum, isPic, check }) => {
  const answerOptions = getAnswerOptions(Number(imageNum));
  const handleClick = (e: React.MouseEvent) => {
    const answer = e.currentTarget.getAttribute('data-attr');

    if (!answer) return;
    check(answer, imageNum);
  };

  return (
    <AnswersContainer>
      {answerOptions.map((el) => {
        if (isPic) {
          return (
            <AnswerOptionsBtn key={Date.now() + el} onClick={handleClick} data-attr={el}>
              {data[el].author}
            </AnswerOptionsBtn>
          );
        } else {
          return (
            <ImageAnswerOptionBtn
              num={el}
              key={Date.now() + el}
              onClick={handleClick}
              data-attr={el}
            />
          );
        }
      })}
    </AnswersContainer>
  );
};

export default memo(GameAnswerOptions);
