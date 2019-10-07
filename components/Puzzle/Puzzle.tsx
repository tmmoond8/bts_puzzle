import React, { useState } from 'react';
import styled from '../../styles/themed-components';
import PuzzleSliding from './PuzzleSliding';
import { IContext } from '../Game';

interface IProps extends IContext{
  img: string;
  puzzle?: number[];
  columns: number;
  rows: number;
  handleClickPuzzle: (point: number) => void;
  prevPuzzle: number[];
}

const Wrapper = styled.div`
  display: flex;
  background-color: white;
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
  const { img, puzzle, prevPuzzle, columns, rows, handleClickPuzzle, gameStatus } = props;
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
            handleClickPuzzle={() => handleClickPuzzle(idx)}
            gameStatus={gameStatus}
          />
        ))}
      </StyledPuzzle>
    </Wrapper>
  );
};

export default Puzzle;
