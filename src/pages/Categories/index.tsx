import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { AppRoutes } from '../../constants';
import { Container } from './styles';

const Categories = () => {
  const [path, setPath] = useState('');
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === AppRoutes.PIC) setPath(AppRoutes.PIC);
    if (pathname === AppRoutes.ART) setPath(AppRoutes.ART);
  }, [pathname]);
  return <Container>this is {path}</Container>;
};

export default Categories;
