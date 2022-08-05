import React, { FC, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AppRoutes, Variant } from '../../constants';
import { BtnClose } from '../../styles';
import { Header } from './styles';
import { Modal, Timer } from '../index';

interface RoundHeaderProps {
  finishRound: (answer: string, correctAnswer: string) => void;
}

const GameRoundHeader: FC<RoundHeaderProps> = ({ finishRound }) => {
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
        <Timer finishRound={finishRound} />
      </Header>
      <Modal isOpened={isOpened} onCancel={handleBtnCloseClick} onAction={closeModal} />
    </>
  );
};

export default GameRoundHeader;
