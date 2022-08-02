import React, { FC } from 'react';
import { Image, Title } from './styles';

interface GameQuestionProps {
  author: string;
  imageNum: string;
  isPic: boolean;
}

const GameQuestion: FC<GameQuestionProps> = ({ imageNum, author, isPic }) => {
  return (
    <>
      <Title isPic={isPic}>
        {isPic ? 'Who is the author of this picture?' : `Which is ${author} picture?`}
      </Title>
      {isPic && <Image num={imageNum} />}
    </>
  );
};

export default GameQuestion;
