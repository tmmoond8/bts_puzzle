import Game from './Game';
export default Game;

export interface IContext {
  gameStatus: 'join' | 'ready' | 'playing' | 'clear' | 'over';
}

