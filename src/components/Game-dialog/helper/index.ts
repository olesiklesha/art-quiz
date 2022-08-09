import { IPicture } from '../../../models';

export enum GameActionKind {
  SET_R_NUMBER = 'SET_ROUND_NUMBER',
  SET_ANS_STATE = 'SET_ANSWERS_STATE',
  SET_T = 'SET_IS_TIMER_ACTIVE',
}

interface GameAction {
  type: GameActionKind;
  payload?: boolean | unknown;
}

interface GameState {
  roundNumber: number;
  answersState: boolean[];
  roundsState: IPicture[];
  variant: string;
  isTimerActive: boolean;
}

export function gameReducer(state: GameState, action: GameAction) {
  const { type, payload } = action;

  switch (type) {
    case GameActionKind.SET_R_NUMBER:
      const { roundNumber } = state;
      return {
        ...state,
        roundNumber: roundNumber + 1,
      };

    case GameActionKind.SET_ANS_STATE:
      const { answersState } = state;
      return {
        ...state,
        answersState: [...answersState, payload as boolean],
      };

    case GameActionKind.SET_T:
      return {
        ...state,
        isTimerActive: payload as boolean,
      };

    default:
      return state;
  }
}
