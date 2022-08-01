import React, { FC } from 'react';
import { Image } from './styles';

interface GameQuestionProps {
  author: string;
  imageNum: string;
  isPic: boolean;
}

const GameQuestion: FC<GameQuestionProps> = ({ imageNum, author, isPic }) => {
  return (
    <div>
      {isPic ? <h3>Who is the author of this picture?</h3> : <h3>Which is {author} picture?</h3>}
      {isPic && <Image num={imageNum} />}
    </div>
  );
};

export default GameQuestion;
