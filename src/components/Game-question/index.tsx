import React, { FC } from 'react';

interface GameQuestionProps {
  author: string;
  imageNum: string;
  isPic: boolean;
}

const GameQuestion: FC<GameQuestionProps> = ({ imageNum, author, isPic }) => {
  return (
    <div>
      {isPic ? <h3>Who is the author of this picture?</h3> : <h3>Which is {author} picture?</h3>}
      {isPic && <div>this is picture {imageNum}</div>}
    </div>
  );
};

export default GameQuestion;
