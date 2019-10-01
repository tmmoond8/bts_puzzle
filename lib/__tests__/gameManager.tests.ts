import { move } from '../gameManager';

describe('gameManager', () => {
  it('move', () => {
    const puzzle = [0, 1, -1, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    expect(move(puzzle, 3, 4)).toEqual('01-134567891011');
  });
  it('move', () => {
    const puzzle = [0, 1, -1, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    expect(move(puzzle, 3, 5)).toEqual('01534-167891011');
  });
});
