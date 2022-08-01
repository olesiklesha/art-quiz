import React, { FC } from 'react';

interface GameAnswerOptionsProps {
  isPic: boolean;
  author: string;
  imageNum: string;
}

const GameAnswerOptions: FC<GameAnswerOptionsProps> = ({ imageNum, author, isPic }) => {
  return <div>answer oprions</div>;
};

export default GameAnswerOptions;
