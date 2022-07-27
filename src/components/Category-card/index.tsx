import React, { FC } from 'react';
import { CategoryContainer, CategoryImage, CategoryImageLabel, ReloadIcon } from './styles';
import { ICategory } from '../../models';
import { CategoryInfo } from '../index';

const CategoryCard: FC<ICategory> = ({ name, game, src, isNew, done }) => {
  return (
    <CategoryContainer to={`/app/quiz/${game}`}>
      <CategoryInfo name={name} done={done} />
      <CategoryImage src={src} isNew={isNew} />
      {done > 0 && done < 10 && (
        <CategoryImageLabel>
          <ReloadIcon />
          Play again
        </CategoryImageLabel>
      )}
    </CategoryContainer>
  );
};

export default CategoryCard;
