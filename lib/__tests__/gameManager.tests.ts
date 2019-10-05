import { move } from '../gameManager';

describe('gameManager', () => {
  it('move', () => {
    const puzzle = [0, 1, -1, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    expect(move(puzzle, 3, 4).join('')).toEqual('01-134567891011');
  });
  it('move', () => {
    const puzzle = [0, 1, -1, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    expect(move(puzzle, 3, 8).join('')).toEqual('01534867-191011');
  });
  it('move', () => {
    const puzzle = [0, 1, -1, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    expect(move(puzzle, 3, 11).join('')).toEqual('0153486711910-1');
  });
  it('move', () => {
    const puzzle = [0, 1, -1, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    expect(move(puzzle, 3, 1).join('')).toEqual('0-1134567891011');
  });

  it('move', () => {
    const puzzle = [0, 1, 2, 3, -1, 5, 6, 7, 8, 9, 10, 11];
    expect(move(puzzle, 3, 3).join('')).toEqual('012-13567891011');
  });

  it('move', () => {
    const puzzle = [0, 1, 2, 3, -1, 5, 6, 7, 8, 9, 10, 11];
    expect(move(puzzle, 3, 5).join('')).toEqual('01235-167891011');
  });
});
