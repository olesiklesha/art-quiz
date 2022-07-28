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
