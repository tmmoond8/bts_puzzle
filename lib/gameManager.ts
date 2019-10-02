class Position {
  x: number;
  y: number;
  constructor(index: number, columns: number) {
    this.x = index % columns;
    this.y = Math.floor(index / columns);
  }
}

const switcherY = (puzzles, x, from , to) => {
  for (let i = from; i < to; i++) {
    const tmp = puzzles[x +];
  }
};

export const move = (puzzles, columns, pointIdx) => {
  if (pointIdx >= puzzles.length || puzzles[pointIdx] === -1) {
    return puzzles.join('');
  }
  const emptyIdx = puzzles.findIndex(p => p === -1);
  const empty = new Position(emptyIdx, columns);
  const point = new Position(pointIdx, columns);
  const moved = [...puzzles];
  if (empty.x === point.x) {
    if (empty.y < point.y) {

    }
  }

  if (empty.x !== point.x && empty.y !== point.y) {
    return puzzles.join('');
  }

  return puzzles.join('');
};
