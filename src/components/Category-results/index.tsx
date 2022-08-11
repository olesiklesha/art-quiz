import React, { FC } from 'react';
import { ICategory } from '../../models';
import { Variant } from '../../constants';

interface ResultsProps {
  data: ICategory[];
  category: string;
}

const CategoryResults: FC<ResultsProps> = ({ data, category }) => {
  return (
    <div>
      <p>{category === Variant.ART ? 'Artist rounds' : 'Picture rounds'}</p>
      {data.map((el) => (
        <span key={el.src}>{el.name}</span>
      ))}
    </div>
  );
};

export default CategoryResults;
