import React, { FC } from 'react';
import { ICategory } from '../../models';
import { Variant } from '../../constants';
import { Container, Title } from './styles';
import { CategoryCard } from '../index';

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
          <CategoryCard
            name={el.name}
            done={el.done}
            isNew={el.isNew}
            src={el.src}
            game={el.game}
            isResult={true}
            solved={el.solved}
            key={el.game}
          />
        ))}
      </Container>
    </>
  );
};

export default CategoryResults;
