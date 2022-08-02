import React, { FC } from 'react';

interface ResultWindowProps {
  nextRound: () => void;
  onCansel: () => void;
}

const AnswerResultWindow: FC<ResultWindowProps> = () => {
  return <div>this is result window</div>;
};

export default AnswerResultWindow;
