import { ANS_QUANTITY, LS, PIC_QUANTITY } from '../constants';
import artistData from '../data/artistData.json';
import pictureData from '../data/pictureData.json';
import { GlobalState } from '../store';
import { IAppData, ICategory } from '../models';
import data from '../data/AppData.json';

const { all: picturesData } = data as IAppData;

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

const getNumberArray = (num: number) => {
  const set = new Set<number>([num]);

  while (set.size !== ANS_QUANTITY) {
    const picNumber = getRandomNumber();

    if (picturesData[picNumber].author !== picturesData[num].author) {
      set.add(picNumber);
    }
  }

  return Array.from(set);
};

export const getAnswerOptions = (num: number) => {
  const arr = getNumberArray(num);
  return shuffle(arr);
};
