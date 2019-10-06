export { default } from './Game';
export type GameStatus = 'join' | 'ready' | 'playing' | 'clear' | 'over';
export interface IContext {
  gameStatus: GameStatus;
}