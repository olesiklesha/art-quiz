import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AppRoutes, Variant } from '../../constants';
import { BtnClose } from '../../styles';
import { Header } from './styles';

const GameRoundHeader = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const path = pathname.split('-').slice(-1).join('');
  const handleClick = () => {
    navigate(path === Variant.PIC ? AppRoutes.PIC : AppRoutes.ART, { replace: true });
  };

  return (
    <Header>
      <BtnClose onClick={handleClick} />
    </Header>
  );
};

export default GameRoundHeader;
