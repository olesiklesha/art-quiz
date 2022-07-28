import React, { FC, useCallback, useState } from 'react';
import { GameDialogProps, IAppData, IPicture } from '../../models';
import { GameRound } from '../index';
import appData from '../../data/AppData.json';
import { useNavigate } from 'react-router-dom';
import { AppRoutes } from '../../constants';

const { art, pic } = appData as IAppData;
const getInitialGameState = (round: string) => {
  const gameVariant = round.split('-').slice(-1).join('');

  if (gameVariant === 'art') return art[round];
  return pic[round];
};

const GameDialog: FC<GameDialogProps> = ({ round }) => {
  const navigate = useNavigate();
  const [gameState] = useState<IPicture[]>(getInitialGameState(round));
  const [roundNumber, setRoundNumber] = useState(0);
  const variant = round.split('-').slice(-1).join('');

  const setNextRound = useCallback(() => {
    if (roundNumber < 9) {
      setRoundNumber((prev) => prev + 1);
    } else {
      finish();
    }
  }, [roundNumber]);

  const finish = () => {
    console.log('finish');
    variant === 'art'
      ? navigate(AppRoutes.ART, { replace: false })
      : navigate(AppRoutes.PIC, { replace: false });
  };
  const { author, year, name, imageNum } = gameState[roundNumber];
  return (
    <div>
      {round}
      <GameRound
        imageNum={imageNum}
        author={author}
        name={name}
        year={year}
        gameVariant={variant}
        setNextRound={setNextRound}
      />
    </div>
  );
};

export default GameDialog;
