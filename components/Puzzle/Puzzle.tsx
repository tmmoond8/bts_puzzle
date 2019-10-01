<<<<<<< HEAD
import React, { useState } from 'react';
=======
import React, { useState, useEffect } from 'react';
>>>>>>> 5a8269b0d1d7219364bbd438788653fbe0827431
import styled from '../../styles/themed-components';
import PuzzleSliding from './PuzzleSliding';

interface IProps {
  img: string;
  puzzle: number[];
  row: number;
}

export interface IPuzzlePiece {
  img: string;
  number: number;
  row: number;
  column: number;
}

export interface IPuzzleSliding extends IPuzzlePiece{
  current: number;
  prev?: number;
}

const Wrapper = styled.div`
  display: flex;
`;

const StyledPuzzle = styled.ul`
  position: relative;
  width: 300px;
  height: 400px;
  user-select: none;
`;

const Puzzle = (props: IProps) => {
  const { img, puzzle, row } = props;
  const [idx, setIdx] = useState(10);
  const column = Math.ceil(puzzle.length / row);
  const [timer, setTimer] = useState(-1);
  const handleClick = () => {
    if (timer > 0) return;
    setIdx(idx + 1);
    setTimer(setTimeout(() => {
      setTimer(-1);
    },                  500));
  };
  return (
    <Wrapper>
      <StyledPuzzle onClick={handleClick}>
        {puzzle.map((number, idx) => <PuzzleSliding img={img} row={row} column={column} number={number} current={idx} />)}
        <PuzzleSliding img={img} row={row} column={column} number={10} current={idx}/>
      </StyledPuzzle>
    </Wrapper>
  );
};

export default Puzzle;
