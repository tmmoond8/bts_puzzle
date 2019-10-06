import { IContext } from '../Game';
export { default } from './PuzzleContainer';

export interface IPuzzlePiece {
  img: string;
  number: number;
  columns: number;
  rows: number;
}

export interface IPuzzleSliding extends IPuzzlePiece, IContext {
  current: number;
  prev: number;
  handleClickPuzzle: () => void;
}
