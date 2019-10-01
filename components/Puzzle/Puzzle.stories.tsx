import React from 'react';

import { storiesOf } from '@storybook/react';
import PuzzlePiece from  './PuzzlePiece';
import Puzzle from  './Puzzle';

storiesOf('Puzzle', module)
  .add('PuzzlePiece', () => (
    <PuzzlePiece img="https://i.imgur.com/7bNfhgP.jpg" row={3} column={4} number={0} />
  )).add('Puzzle 1', () => {
    const puzzle = [
      0, 1, 2,
      3, 4, 5,
      6, 7, 8,
      9, 
    ];
    return <Puzzle img="https://i.imgur.com/7bNfhgP.jpg" puzzle={puzzle} row={3}/>;
  }).add('Puzzle 2', () => {
    const puzzle = [
      3, 4, 5,
      0, 1, 2,
      6, 7, 8,
      9, 10, -1,
    ];
    return <Puzzle img="https://i.imgur.com/7bNfhgP.jpg" puzzle={puzzle} row={3} />;
  }).add('Puzzle 3', () => {
    const puzzle = [
      3, 4, 5,
      0, 1, 2,
      6, 7, 8,
      9, 10, -1,
    ];
    return <Puzzle img="https://i.imgur.com/7bNfhgP.jpg" puzzle={puzzle} row={3}/>;
  });
