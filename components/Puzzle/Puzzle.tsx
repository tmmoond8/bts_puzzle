import React, { useState } from 'react';
import styled from '../../styles/themed-components';
import PuzzleSliding from './PuzzleSliding';

interface IProps {
  img: string;
  puzzle: number[];
  columns: number;
  handleClickPuzzle: (point: number) => void;
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
  handleClickPuzzle: () => void;
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
  const { img, puzzle, columns, handleClickPuzzle } = props;
  const rows = Math.ceil(puzzle.length / columns);
  const [timer, setTimer] = useState(-1);
  const handleClick = (point: number) => {
    if (timer > 0) return;
    handleClickPuzzle(point);
    setTimer(setTimeout(() => {
      setTimer(-1);
    },                  500));
  };
  return (
    <Wrapper>
      <StyledPuzzle>
        {puzzle.map((number, idx) => <PuzzleSliding img={img} columns={columns} rows={rows} number={number} current={idx} handleClickPuzzle={() => handleClick(idx)}/>)}
      </StyledPuzzle>
    </Wrapper>
  );
};

export default Puzzle;
