import { ISettings } from '../models';

export enum AppRoutes {
  MAIN = '/',
  APP = '/app',
  ART = '/app/artist-quiz',
  PIC = '/app/picture-quiz',
  GAME = '/app/quiz/:id',
  RESULTS = '/app/results',
  ERROR = '*',
  SETTINGS = 'settings',
}

export const LS = 'react-art-quiz';

export enum Variant {
  ART = 'art',
  PIC = 'pic',
}

export const R_QUANTITY = 10;

export const ANS_QUANTITY = 4;

export const PIC_QUANTITY = 241;

export const DEFAULT_SETTINGS: ISettings = Object.freeze({
  isTimeGame: true,
  duration: 20,
  volume: 50,
});
