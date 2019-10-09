class Position {
  x: number;
  y: number;
  constructor(index: number, columns: number) {
    this.x = index % columns;
    this.y = Math.floor(index / columns);
  }
}

const switcherY = (puzzles, columns, from , to) => {
  const moved = [...puzzles];
  if (from < to) {
    for (let i = from; i < to; i += columns) {
      moved[i] = moved[i + columns];
    }
  } else {
    for (let i = from; i > to; i -= columns) {
      moved[i] = moved[i - columns];
    }
  }
  moved[to] = -1;
  return moved;
};

const switcherX = (puzzles, from , to) => {
  const moved = [...puzzles];
  if (from < to) {
    for (let i = from; i < to; i++) {
      moved[i] = moved[i + 1];
    }
  } else {
    for (let i = from; i > to; i--) {
      moved[i] = moved[i - 1];
    }
  }
  moved[to] = -1;
  return moved;
};

export const move = (puzzles, columns, pointIdx) => {
  if (pointIdx >= puzzles.length || puzzles[pointIdx] === -1) {
    return puzzles;
  }
  const emptyIdx = puzzles.findIndex(p => p === -1);
  const empty = new Position(emptyIdx, columns);
  const point = new Position(pointIdx, columns); '';

  if (empty.x !== point.x && empty.y !== point.y) {
    return puzzles;
  }

  let moved = [];
  if (empty.x === point.x) {
    moved = switcherY(puzzles, columns, emptyIdx, pointIdx);
    return moved;
  }
  moved = switcherX(puzzles, emptyIdx, pointIdx);
  return moved;
};

export const createPuzzle = ({ columns, rows }) => {
  const length = columns * rows;
  // tslint:disable-next-line: prefer-array-literal
  let puzzle = new Array(length).fill('_').map((_, idx) => idx === columns * rows - 1 ? -1 : idx);
  for (let i = 0; i < 200; i++) {
    puzzle = move(puzzle, columns, Math.floor(Math.random() * 232324 % length));
  }
  return puzzle;
};
