import React, { useState } from 'react';
import styled, { withProps, keyframes } from '../../styles/themed-components';
import PuzzlePiece from './PuzzlePiece';
import { IPuzzleSliding } from './Puzzle';

const StyledPuzzleSliding = withProps<IPuzzleSliding, HTMLLIElement>(styled.li)`
  position: absolute;
  width: ${props => 100 / props.row}%;
  height: ${props => 100 / props.column}%;
  overflow: hidden;
  left: 0;
  top: 0;
  animation: ${props => props.move} 1s ease forwards;
  border-radius: 6px;
`;
// transform: translate(${props =>  props.x * 100}%, ${props => props.y * 100}%) scale(0.99);

const PuzzleSliding = (props: IPuzzleSliding) => {
  const { row, column, index, img, x, y } = props;
  const [preX, setPreX] = useState(x);
  const [preY, setPreY] = useState(y);
  const move = keyframes`
    0% {
      transform: translate(${(preX) * 100}%, ${preY * 100}%) scale(0.99);
    }
    100% {
      transform: translate(${x * 100}%, ${y * 100}%) scale(0.99);
    }
  `;
  return (
    <StyledPuzzleSliding key={index} x={x} y={y} row={row} column={column} move={move}>
      <PuzzlePiece img={img} row={row} column={column} index={index}/>
    </StyledPuzzleSliding>
  );
};

export default PuzzleSliding;
