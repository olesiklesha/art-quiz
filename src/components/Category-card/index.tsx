import React from 'react';
import { CategoryContainer, CategoryImage } from './styles';
import { AppRoutes } from '../../constants';

const CategoryCard = () => {
  return (
    <CategoryContainer to={AppRoutes.GAME}>
      this is card
      <CategoryImage />
    </CategoryContainer>
  );
};

export default CategoryCard;
