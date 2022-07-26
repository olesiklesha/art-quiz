import { LS } from '../constants';
import artistData from '../data/artistData.json';
import pictureData from '../data/pictureData.json';
import { GlobalState } from '../store';
import { ICategory } from '../models';

export const initState = (): GlobalState => {
  const storageState = window.localStorage.getItem(LS);

  if (storageState) {
    return JSON.parse(storageState);
  }

  return {
    artists: artistData as ICategory[],
    pictures: pictureData as ICategory[],
  };
};
