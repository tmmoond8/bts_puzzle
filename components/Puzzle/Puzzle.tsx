import React from 'react';
import styled, { withProps } from '../../styles/themed-components';
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

const StyledPuzzle = withProps<any, HTMLUListElement>(styled.ul)`
  position: relative;
  ${({ theme, rows, columns }) => theme.puzzleSize(columns, rows)};
`;

const Puzzle = (props: IProps) => {
  const { img, puzzle, prevPuzzle, columns, rows, handleClickPuzzle, gameStatus } = props;
  return (
    <Wrapper>
      <StyledPuzzle columns={columns} rows={rows}>
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
