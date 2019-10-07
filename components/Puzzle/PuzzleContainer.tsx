import React, { useState, useEffect } from 'react';
import Puzzle from './Puzzle';
import { move } from '../../lib/gameManager';
import { IContext } from '../Game';

interface IProps extends IContext {
  puzzle: number[];
  columns: number;
  rows: number;
  img: string;
  gameClear: () => void;
}

const PuzzleContainer = (props: IProps) => {
  const { puzzle: originPuzzle, columns, rows, img, gameStatus, gameClear } = props;
  const [puzzle, setPuzzle] = useState(originPuzzle);
  const [prevPuzzle, setPrevPuzzle] = useState(originPuzzle);
  const handlePuzzleClick = (point: number) => {
    if (gameStatus !== 'playing') return;
    setPrevPuzzle(puzzle);
    const nextPuzzle = move(puzzle, columns, point);
    if (nextPuzzle.find((number, idx) => number !== idx && number !== -1) === undefined) {
      setTimeout(() => {
        gameClear();
        setPuzzle(prevPuzzle.map((_, idx) => idx));
      },         500);
    }
    setPuzzle(nextPuzzle);
  };
  useEffect(() => {
    setPuzzle(originPuzzle);
    setPrevPuzzle(originPuzzle);
  },        [originPuzzle]);

  return <Puzzle
    img ={ img }
    puzzle={puzzle}
    rows={rows}
    columns={columns}
    handleClickPuzzle ={ handlePuzzleClick }
    prevPuzzle={prevPuzzle}
    gameStatus={gameStatus}
  /> ;
};

export default PuzzleContainer;
