import React, { useState } from 'react';
import styled from '../../styles/themed-components';
import PuzzleSliding from './PuzzleSliding';

interface IProps {
  img: string;
  puzzle: number[];
  columns: number;
  handleClickPuzzle: (point: number) => void;
  prevPuzzle: number[];
}

export interface IPuzzlePiece {
  img: string;
  number: number;
  columns: number;
  rows: number;
}

export interface IPuzzleSliding extends IPuzzlePiece{
  current: number;
  prev: number;
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
  ${({ theme }) => theme.media.phone`
    width: 100vw;
    height: 133.3vw;
  `}
`;

const Puzzle = (props: IProps) => {
  const { img, puzzle, prevPuzzle, columns, handleClickPuzzle } = props;
  const rows = Math.ceil(puzzle.length / columns);
  return (
    <Wrapper>
      <StyledPuzzle>
        {puzzle.map((number, idx) => (
          <PuzzleSliding
            img={img}
            columns={columns}
            rows={rows}
            number={number}
            current={idx}
            prev={prevPuzzle.findIndex(item => item === number)}
            handleClickPuzzle={() => handleClickPuzzle(idx)}/>
        ))}
      </StyledPuzzle>
    </Wrapper>
  );
};

export default Puzzle;
