import React, { useState } from 'react';
import Puzzle from './Puzzle';
import { move } from '../../lib/gameManager';
import { IContext } from '../Game';

interface IProps extends IContext {
  puzzle: number[];
  columns: number;
  img: string;
}

const PuzzleContainer = (props: IProps) => {
  const { puzzle: originPuzzle, columns, img, gameStatus } = props;
  const [puzzle, setPuzzle] = useState(originPuzzle);
  const [prevPuzzle, setPrevPuzzle] = useState(originPuzzle);
  const handlePuzzleClick = (point: number) => {
    if (gameStatus !== 'playing') return;
    setPrevPuzzle(puzzle);
    const nextPuzzle = move(puzzle, columns, point);
    setPuzzle(nextPuzzle);
  };

  return <Puzzle
    img ={ img }
    puzzle={puzzle}
    columns={columns}
    handleClickPuzzle ={ handlePuzzleClick }
    prevPuzzle={prevPuzzle}
    gameStatus={gameStatus}
  /> ;
};

export default PuzzleContainer;
