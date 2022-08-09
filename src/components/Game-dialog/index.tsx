import React, { FC, useCallback, useContext, useReducer, useState } from 'react';
import { GameDialogProps, IAppData } from '../../models';
import { AnswerResultWindow, GameResultWindow, GameRound, Modal } from '..';
import appData from '../../data/AppData.json';
import { useNavigate } from 'react-router-dom';
import { AppRoutes, R_QUANTITY, Variant } from '../../constants';
import { Wrapper } from './styles';
import { GlobalActionKind, GlobalContext } from '../../store';
import { GameActionKind, gameReducer } from './helper';

const { art, pic } = appData as IAppData;

const getInitialGameState = (round: string, variant: string) => {
  if (variant === Variant.ART) return art[round];
  return pic[round];
};

const GameDialog: FC<GameDialogProps> = ({ round }) => {
  const variant = round.split('-').slice(-1).join('');
  const [gameState, gameDispatch] = useReducer(gameReducer, {
    answersState: [],
    roundNumber: 0,
    roundsState: getInitialGameState(round, variant),
    isTimerActive: true,
  });

  const { roundNumber, answersState, roundsState, isTimerActive } = gameState;

  const [, dispatch] = useContext(GlobalContext);
  const [isOpened, setIsOpened] = useState(false);
  const [isResultOpened, setResultOpened] = useState(false);
  const navigate = useNavigate();

  const finish = useCallback(() => {
    navigate(variant === Variant.ART ? AppRoutes.ART : AppRoutes.PIC, { replace: true });
  }, [navigate, variant]);

  const setNextRound = useCallback(() => {
    if (roundNumber < R_QUANTITY - 1) {
      gameDispatch({
        type: GameActionKind.SET_R_NUMBER,
      });
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

  const toggleIsTimerActive = useCallback(() => {
    gameDispatch({
      type: GameActionKind.SET_T,
      payload: !isTimerActive,
    });
  }, [isTimerActive]);

  const { author, imageNum } = roundsState[roundNumber];

  const checkAnswer = useCallback(
    (answer: string, correctAnswer: string) => {
      gameDispatch({
        type: GameActionKind.SET_ANS_STATE,
        payload: answer === correctAnswer,
      });
      setIsOpened(true);
      toggleIsTimerActive();
    },
    [toggleIsTimerActive]
  );

  const handleCloseModal = () => {
    setIsOpened(false);
    setNextRound();
    toggleIsTimerActive();
  };

  return (
    <Wrapper>
      <GameRound
        imageNum={imageNum}
        author={author}
        gameVariant={variant}
        check={checkAnswer}
        isTimerActive={isTimerActive}
      />
      <Modal isOpened={isOpened} onCancel={handleCloseModal}>
        <AnswerResultWindow
          onCansel={handleCloseModal}
          result={answersState[roundNumber]}
          pic={roundsState[roundNumber]}
        />
      </Modal>
      <Modal isOpened={isResultOpened} onCancel={closeResultWindow}>
        <GameResultWindow result={answersState} onAction={closeResultWindow} />
      </Modal>
    </Wrapper>
  );
};

export default GameDialog;
