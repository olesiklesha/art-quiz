import React, { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { AppRoutes } from '../../constants';
import { Container } from './styles';
import { CategoryCard } from '../../components';
import { GlobalContext } from '../../store';

const Categories = () => {
  const [path, setPath] = useState('');
  const { pathname } = useLocation();
  const [{ artists, pictures }] = useContext(GlobalContext);

  useEffect(() => {
    if (pathname === AppRoutes.PIC) setPath(AppRoutes.PIC);
    if (pathname === AppRoutes.ART) setPath(AppRoutes.ART);
  }, [pathname]);

  return (
    <Container>
      {path === AppRoutes.PIC &&
        pictures.map((el) => (
          <CategoryCard
            name={el.name}
            done={el.done}
            isNew={el.isNew}
            src={el.src}
            game={el.game}
            isResult={false}
            solved={el.solved}
            key={el.game}
          />
        ))}
      {path === AppRoutes.ART &&
        artists.map((el) => (
          <CategoryCard
            name={el.name}
            done={el.done}
            isNew={el.isNew}
            src={el.src}
            game={el.game}
            isResult={false}
            solved={el.solved}
            key={el.game}
          />
        ))}
    </Container>
  );
};

export default Categories;
