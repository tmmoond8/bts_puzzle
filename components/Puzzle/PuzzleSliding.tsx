import React from 'react';
import styled, { withProps, keyframes, css } from '../../styles/themed-components';
import PuzzlePiece from './PuzzlePiece';
import { IPuzzleSliding } from './Puzzle';

const StyledPuzzleSliding = withProps<IPuzzleSliding, HTMLLIElement>(styled.li)`
  position: absolute;
  width: ${props => 100 / props.columns}%;
  height: ${props => 100 / props.rows}%;
  overflow: hidden;
  left: 0;
  top: 0;
  ${({ move }) => move};
  border-radius: 6px;
`;

const moveKeyFrames = ({ current, prev, columns }) => {
  const x = current % columns;
  const y = Math.floor(current / columns);
  const prevX = prev % columns;
  const prevY = Math.floor(prev / columns);
  const move = keyframes`
    0% {
      transform: translate(${(prevX) * 100}%, ${prevY * 100}%) scale(0.99);
    }
    100% {
      transform: translate(${x * 100}%, ${y * 100}%) scale(0.99);
    }
  `;
  return prev === current
    ? css`transform: translate(${x * 100}%, ${y * 100}%) scale(0.99)`
    : css`animation: ${move} .5s ease forwards`;
};

const PuzzleSliding = (props: IPuzzleSliding) => {

  const { columns, rows, number, img, handleClickPuzzle } = props;
  const move = moveKeyFrames(props);

  return (
    <StyledPuzzleSliding key={number} columns={columns} rows={rows} move={move} onClick={handleClickPuzzle}>
      <PuzzlePiece img={img} columns={columns} rows={rows} number={number}/>
    </StyledPuzzleSliding>
  );
};

export default PuzzleSliding;
