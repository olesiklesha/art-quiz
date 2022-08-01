import { LS, PIC_QUANTITY } from '../constants';
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

const getRandomNumber = () => Math.floor(Math.random() * PIC_QUANTITY);

const shuffle = (arr: number[]) => {
  for (let i = arr.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = arr[j];
    arr[j] = arr[i];
    arr[i] = temp;
  }

  return arr;
};

export const getNumberArray = (num: number) => {
  const set = new Set<number>();

  return Array.from(set);
};
