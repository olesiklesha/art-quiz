import React, { FC } from 'react';
import { CategoryInfoContainer, CustomSpan } from './styles';

interface CategoryInfoProps {
  name: string;
  done: number;
}

const CategoryInfo: FC<CategoryInfoProps> = ({ name, done }) => {
  return (
    <CategoryInfoContainer>
      <CustomSpan accent={false}>{name}</CustomSpan>
      <CustomSpan accent={true}>{done > 0 ? `${done}/10` : ''}</CustomSpan>
    </CategoryInfoContainer>
  );
};

export default CategoryInfo;
