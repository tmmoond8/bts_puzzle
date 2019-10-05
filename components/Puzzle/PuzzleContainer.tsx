import React, { useState } from 'react';
import Puzzle from './Puzzle';
import { move } from '../../lib/gameManager';

interface IProps {
  puzzle: number[];
  columns: number;
  img: string;
}

const PuzzleContainer = (props: IProps) => {
  const { puzzle: originPuzzle, columns, img } = props;
  const [puzzle, setPuzzle] = useState(originPuzzle);
  const handlePuzzleClick = (point: number) => {
    setPuzzle(move(puzzle, columns, point));
  };

  return <Puzzle img ={ img } puzzle={puzzle} columns={columns} handleClickPuzzle ={ handlePuzzleClick } /> ;
};

export default PuzzleContainer;
