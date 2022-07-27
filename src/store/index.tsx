import { ICategory } from '../models';
import { initState } from '../utils';
import React, { createContext, useReducer } from 'react';

export interface GlobalState {
  artists: ICategory[];
  pictures: ICategory[];
}

export enum GlobalActionKind {}

interface GlobalAction {
  type: GlobalActionKind;
  payload: ICategory;
}

const initialState = initState();

function globalReducer(state: GlobalState, action: GlobalAction) {
  const { type } = action;

  switch (type) {
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
