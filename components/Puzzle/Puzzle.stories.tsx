import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import PuzzlePiece from  './PuzzlePiece';
import Puzzle from  './Puzzle';
import GameOver from '../Game/GameOver';

const handleClickPuzzle = action('click puzzle');

storiesOf('Puzzle', module)
  .add('PuzzlePiece', () => (
    <PuzzlePiece img="https://i.imgur.com/7bNfhgP.jpg" columns={3} rows={4} number={0}/>
  )).add('Puzzle : view 3 x 4', () => {
    const puzzle = [
      3, 4, 5,
      0, 1, 2,
      6, 7, 8,
      9, 10, -1,
    ];
    return (
      <Puzzle
        img="https://i.imgur.com/7bNfhgP.jpg"
        puzzle={puzzle}
        columns={3}
        rows={4}
        handleClickPuzzle={handleClickPuzzle}
        prevPuzzle={puzzle}
        gameStatus="playing"
      />
    );
  }).add('Puzzle : view 4 x 5', () => {
    const puzzle = [
      0, 1, 2, 3,
      4, 5, 6, 8,
      9, 10, -1, 12,
      13, 14, 15, 16,
      17, 18, 19, 20,
    ];
    return (
      <Puzzle
        img="https://i.imgur.com/7bNfhgP.jpg"
        puzzle={puzzle}
        columns={4}
        rows={5}
        handleClickPuzzle={handleClickPuzzle}
        prevPuzzle={puzzle}
        gameStatus="playing"
      />
    );
  }).add('Puzzle : move animation', () => {
    const puzzle = [
      0, 1, 2,
      3, 4, 5,
      6, 7, 8,
      9, 10, -1,
    ];
    const prevPuzzle = [
      0, 1, 2,
      3, 4, 5,
      6, 7, 8,
      9, -1, 10,
    ];
    return (
      <Puzzle
        img="https://i.imgur.com/7bNfhgP.jpg"
        puzzle={puzzle}
        columns={3}
        rows={4}
        handleClickPuzzle={handleClickPuzzle}
        prevPuzzle={prevPuzzle}
        gameStatus="playing"
      />
    );
  }).add('Puzzle : game over', () => {
    const puzzle = [
      3, 4, 5,
      0, 1, 2,
      6, 7, 8,
      9, 10, -1,
    ];
    return (
      <div style={{ position: 'relative' }}>
        <Puzzle
          img="https://i.imgur.com/7bNfhgP.jpg"
          puzzle={puzzle}
          columns={3}
          rows={4}
          handleClickPuzzle={handleClickPuzzle}
          prevPuzzle={puzzle}
          gameStatus="over"
        />
        <GameOver gameReady={action('ready')}/>
      </div>
    );
  });
