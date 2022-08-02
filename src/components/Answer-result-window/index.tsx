import React, { FC } from 'react';
import { IPicture } from '../../models';

interface ResultWindowProps {
  onCansel: () => void;
  result: boolean;
  pic: IPicture;
}

const AnswerResultWindow: FC<ResultWindowProps> = ({ result, pic, onCansel }) => {
  return (
    <div>
      result - {result}
      <button onClick={onCansel}>next</button>
    </div>
  );
};

export default AnswerResultWindow;
