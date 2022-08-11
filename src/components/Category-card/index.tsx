import React, { FC } from 'react';
import { CategoryContainer, CategoryImage, CategoryImageLabel, ReloadIcon } from './styles';
import { ICategory } from '../../models';
import { CategoryInfo } from '../index';

type CardProps = ICategory & { isResult: boolean };

const CategoryCard: FC<CardProps> = ({ name, game, src, isNew, done, isResult }) => {
  return (
    <CategoryContainer to={`/app/${isResult ? 'results' : 'quiz'}/${game}`}>
      <CategoryInfo name={name} done={done} />
      <CategoryImage src={src} isNew={isNew} />
      {done > 0 && done < 10 && !isResult && (
        <CategoryImageLabel>
          <ReloadIcon />
          Play again
        </CategoryImageLabel>
      )}
    </CategoryContainer>
  );
};

export default CategoryCard;
