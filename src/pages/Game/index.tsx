import React from 'react';
import { useLocation } from 'react-router-dom';
import { GameDialog } from '../../components';

const Game = () => {
  const { pathname } = useLocation();
  const round = pathname.split('/').slice(-1).join('');
  return <GameDialog round={round} />;
};

export default Game;
