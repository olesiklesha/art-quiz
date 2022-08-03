import React, { FC } from 'react';
import { IPicture } from '../../models';
import { Btn, Picture, SubTitle, Title } from './styles';

interface ResultWindowProps {
  onCansel: () => void;
  result: boolean;
  pic: IPicture;
}

const AnswerResultWindow: FC<ResultWindowProps> = ({ result, pic, onCansel }) => {
  const { author, year, name, imageNum } = pic;
  console.log(result);
  return (
    <>
      <Picture isCorrect={result} img={imageNum} />
      <Title>{name}</Title>
      <SubTitle>
        {author}, {year}
      </SubTitle>
      <Btn accent={true} onClick={onCansel}>
        Next
      </Btn>
    </>
  );
};

export default AnswerResultWindow;
