import React, { FC } from 'react';
import { GameDialogProps } from '../../models';
import { GameRound } from '../index';

const GameDialog: FC<GameDialogProps> = ({ round }) => {
  return (
    <div>
      {round}
      <GameRound />
    </div>
  );
};

export default GameDialog;
