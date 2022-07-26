import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { AppRoutes } from '../../constants';
import { Container } from './styles';
import { CategoryCard } from '../../components';

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 8, 10];
const Categories = () => {
  const [path, setPath] = useState('');
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === AppRoutes.PIC) setPath(AppRoutes.PIC);
    if (pathname === AppRoutes.ART) setPath(AppRoutes.ART);
  }, [pathname]);

  return (
    <Container>
      {arr.map((el) => (
        <CategoryCard key={Date.now()} />
      ))}
    </Container>
  );
};

export default Categories;
