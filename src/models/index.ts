export interface ICategory {
  name: string;
  game: string;
  isNew: boolean;
  src: string;
  done: number;
  solved: boolean[];
}

export interface GameDialogProps {
  round: string;
}

export interface IPicture {
  author: string;
  name: string;
  year: string;
  imageNum: string;
}

export interface IAppData {
  art: IAppRounds;
  pic: IAppRounds;
  all: IPicture[];
}

export interface IAppRounds {
  [key: string]: IPicture[];
}

export interface ISettings {
  isTimeGame: boolean;
  duration: number;
  volume: number;
}
