import React, { FC, useCallback, useContext, useState } from 'react';
import { GameDialogProps, IAppData, IPicture } from '../../models';
import { AnswerResultWindow, GameResultWindow, GameRound, Modal } from '..';
import appData from '../../data/AppData.json';
import { useNavigate } from 'react-router-dom';
import { AppRoutes, R_QUANTITY, Variant } from '../../constants';
import { Wrapper } from './styles';
import { GlobalActionKind, GlobalContext } from '../../store';

const { art, pic } = appData as IAppData;

const getInitialGameState = (round: string, variant: string) => {
  if (variant === Variant.ART) return art[round];
  return pic[round];
};

const GameDialog: FC<GameDialogProps> = ({ round }) => {
  const variant = round.split('-').slice(-1).join('');
  const [, dispatch] = useContext(GlobalContext);
  const [gameState] = useState<IPicture[]>(getInitialGameState(round, variant));
  const [roundNumber, setRoundNumber] = useState(0);
  const [answersState, setAnswersState] = useState<boolean[]>([]);
  const [isOpened, setIsOpened] = useState(false);
  const [isResultOpened, setResultOpened] = useState(false);
  const navigate = useNavigate();

  const finish = useCallback(() => {
    navigate(variant === Variant.ART ? AppRoutes.ART : AppRoutes.PIC, { replace: true });
  }, [navigate, variant]);

  const setNextRound = useCallback(() => {
    if (roundNumber < R_QUANTITY - 1) {
      setRoundNumber((prev) => prev + 1);
    } else {
      setResultOpened(true);
    }
  }, [roundNumber]);

  const closeResultWindow = useCallback(() => {
    setResultOpened((prev) => !prev);
    dispatch({
      type: GlobalActionKind.UPDATE_PIC_STATE,
      payload: {
        game: round,
        variant: variant === Variant.ART ? Variant.ART : Variant.PIC,
        solved: answersState,
      },
    });
    finish();
  }, [finish, answersState, dispatch, round, variant]);

  const { author, year, name, imageNum } = gameState[roundNumber];
  const checkAnswer = useCallback((answer: string, correctAnswer: string) => {
    const ans = answer === correctAnswer;

    setAnswersState((prev) => [...prev, ans]);
    setIsOpened(true);
  }, []);

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
        check={checkAnswer}
      />
      <Modal isOpened={isOpened} onCancel={handleCloseModal}>
        <AnswerResultWindow
          onCansel={handleCloseModal}
          result={answersState[roundNumber]}
          pic={gameState[roundNumber]}
        />
      </Modal>
      <Modal isOpened={isResultOpened} onCancel={closeResultWindow}>
        <GameResultWindow result={answersState} onAction={closeResultWindow} />
      </Modal>
    </Wrapper>
  );
};

export default GameDialog;
