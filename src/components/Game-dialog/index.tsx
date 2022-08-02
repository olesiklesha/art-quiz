import React, { FC, MouseEventHandler, useCallback, useState } from 'react';
import { GameDialogProps, IAppData, IPicture } from '../../models';
import { AnswerResultWindow, GameRound, Modal } from '..';
import appData from '../../data/AppData.json';
import { useNavigate } from 'react-router-dom';
import { AppRoutes, R_QUANTITY, Variant } from '../../constants';
import { Wrapper } from './styles';

const { art, pic } = appData as IAppData;

const getInitialGameState = (round: string, variant: string) => {
  if (variant === Variant.ART) return art[round];
  return pic[round];
};

const GameDialog: FC<GameDialogProps> = ({ round }) => {
  const variant = round.split('-').slice(-1).join('');
  const [gameState] = useState<IPicture[]>(getInitialGameState(round, variant));
  const [roundNumber, setRoundNumber] = useState(0);
  const [answersState, setAnswersState] = useState<boolean[]>([]);
  const [isOpened, setIsOpened] = useState(false);
  const navigate = useNavigate();

  const finish = useCallback(() => {
    navigate(variant === Variant.ART ? AppRoutes.ART : AppRoutes.PIC, { replace: true });
  }, [navigate, variant]);

  const setNextRound = useCallback(() => {
    if (roundNumber < R_QUANTITY - 1) {
      setRoundNumber((prev) => prev + 1);
    } else {
      finish();
    }
  }, [roundNumber, finish]);

  const { author, year, name, imageNum } = gameState[roundNumber];
  const checkAnswer = (answer: string, correctAnswer: string) => {
    setAnswersState((prev) => [...prev, answer === correctAnswer]);
    setIsOpened(true);
  };

  const handleCloseModal = () => {
    setIsOpened(false);
    setNextRound();
  };

  return (
    <Wrapper>
      <GameRound
        imageNum={imageNum}
        author={author}
        name={name}
        year={year}
        gameVariant={variant}
        setNextRound={setNextRound}
        check={checkAnswer}
      />
      <Modal isOpened={isOpened} onCancel={handleCloseModal}>
        <AnswerResultWindow
          onCansel={handleCloseModal}
          result={answersState[roundNumber]}
          pic={gameState[roundNumber]}
        />
      </Modal>
    </Wrapper>
  );
};

export default GameDialog;
