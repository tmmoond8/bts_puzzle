
import React, { useState } from 'react';
import styled from '../../styles/themed-components';
import PuzzleSliding from './PuzzleSliding';

interface IProps {
  img: string;
  puzzle: number[];
  columns: number;
}

export interface IPuzzlePiece {
  img: string;
  number: number;
  columns: number;
  rows: number;
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
  const { img, puzzle, columns } = props;
  const [idx, setIdx] = useState(10);
  const rows = Math.ceil(puzzle.length / columns);
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
        {puzzle.map((number, idx) => <PuzzleSliding img={img} columns={columns} rows={rows} number={number} current={idx} />)}
        <PuzzleSliding img={img} columns={columns} rows={rows} number={10} current={idx}/>
      </StyledPuzzle>
    </Wrapper>
  );
};

export default Puzzle;
