import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AppRoutes, Variant } from '../../constants';
import { BtnClose } from '../../styles';
import { Header } from './styles';
import { Modal } from '../index';

const GameRoundHeader = () => {
  const [isOpened, setIsOpened] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const path = pathname.split('-').slice(-1).join('');

  const handleBtnCloseClick = () => {
    setIsOpened((prev) => !prev);
  };
  const closeModal = () => {
    navigate(path === Variant.PIC ? AppRoutes.PIC : AppRoutes.ART, { replace: true });
  };

  return (
    <>
      <Header>
        <BtnClose onClick={handleBtnCloseClick} />
      </Header>
      <Modal isOpened={isOpened} onCancel={handleBtnCloseClick} onAction={closeModal} />
    </>
  );
};

export default GameRoundHeader;
