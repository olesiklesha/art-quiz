import React, { FC } from 'react';
import { CategoryContainer, CategoryImage } from './styles';
import { AppRoutes } from '../../constants';
import { ICategory } from '../../models';

const CategoryCard: FC<ICategory> = ({ name, game, src, isNew, done }) => {
  return (
    <CategoryContainer to={AppRoutes.GAME}>
      {name}
      <CategoryImage src={src} />
    </CategoryContainer>
  );
};

export default CategoryCard;
