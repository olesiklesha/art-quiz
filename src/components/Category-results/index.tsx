import React, { FC } from 'react';
import { ICategory } from '../../models';
import { Variant } from '../../constants';
import { Container, Title } from './styles';

interface ResultsProps {
  data: ICategory[];
  category: string;
}

const CategoryResults: FC<ResultsProps> = ({ data, category }) => {
  return (
    <>
      <Title>{category === Variant.ART ? 'Artist rounds' : 'Picture rounds'}</Title>
      <Container>
        {data.map((el) => (
          <span key={el.src}>{el.name}</span>
        ))}
      </Container>
    </>
  );
};

export default CategoryResults;
