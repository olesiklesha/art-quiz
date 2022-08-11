import { ICategory, ISettings } from '../models';
import { initState } from '../utils';
import React, { createContext, useReducer } from 'react';
import { LS, Variant } from '../constants';

export interface GlobalState {
  artists: ICategory[];
  pictures: ICategory[];
  settings: ISettings;
}

interface UpdatePicStateProps {
  game: string;
  solved: boolean[];
  variant: Variant.ART | Variant.PIC;
}

export enum GlobalActionKind {
  UPDATE_PIC_STATE = 'pictures',
  UPDATE_SETT_STATE = 'settings',
}

interface GlobalAction {
  type: GlobalActionKind;
  payload: UpdatePicStateProps | ISettings;
}

const initialState = initState();

function globalReducer(state: GlobalState, action: GlobalAction) {
  const { type, payload } = action;

  switch (type) {
    case GlobalActionKind.UPDATE_PIC_STATE:
      const { solved, game, variant } = payload as UpdatePicStateProps;

      if (variant === Variant.PIC) {
        const newState = {
          ...state,
          pictures: state.pictures.map((el) => {
            if (el.game !== game) return el;

            el.isNew = false;
            el.done = solved.filter((el) => el).length;
            el.solved = solved;
            return el;
          }),
        };
        window.localStorage.setItem(LS, JSON.stringify(newState));
        return newState;
      } else {
        const newState = {
          ...state,
          artists: state.artists.map((el) => {
            if (el.game !== game) return el;

            el.isNew = false;
            el.done = solved.filter((el) => el).length;
            el.solved = solved;
            return el;
          }),
        };
        window.localStorage.setItem(LS, JSON.stringify(newState));
        return newState;
      }

    case GlobalActionKind.UPDATE_SETT_STATE:
      const { isTimeGame, volume, duration } = payload as ISettings;

      const newState = {
        ...state,
        settings: { isTimeGame, volume, duration },
      };

      window.localStorage.setItem(LS, JSON.stringify(newState));

      return newState;

    default:
      return state;
  }
}

export const GlobalContext = createContext<
  [state: GlobalState, dispatch: React.Dispatch<GlobalAction>]
>([initialState, () => null]);

type ContextProps = {
  children: React.ReactNode;
};

export function GlobalContextProvider({ children }: ContextProps) {
  const state = useReducer(globalReducer, initialState);
  return <GlobalContext.Provider value={state}>{children}</GlobalContext.Provider>;
}
