import React, { useState, useEffect } from 'react';
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
  animation: ${props => props.move} .5s ease forwards;
  border-radius: 6px;
`;
// transform: translate(${props =>  props.x * 100}%, ${props => props.y * 100}%) scale(0.99);

const PuzzleSliding = (props: IPuzzleSliding) => {
<<<<<<< HEAD
  const { row, column, number, img, current } = props;
  const x = current % row;
  const y = Math.floor(current / row);
  const [prevX, setPrevX] = useState(x);
  const [prevY, setPrevY] = useState(y);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPrevX(x);
      setPrevY(y);
    },                                                    500);
           return () => clearTimeout(timer);
  }, [x, y]);
=======
  const { row, column, index, img, x, y, prevX= x, prevY= y } = props;
  const [preTimeout, setPrevTimeout] = useState(undefined);
  let timeoutCallback;
>>>>>>> 5a8269b0d1d7219364bbd438788653fbe0827431

  const move = keyframes`
    0% {
      transform: translate(${(prevX) * 100}%, ${prevY * 100}%) scale(0.99);
    }
    100% {
      transform: translate(${x * 100}%, ${y * 100}%) scale(0.99);
    }
  `;
  return (
    <StyledPuzzleSliding key={number} x={x} y={y} row={row} column={column} move={move}>
      <PuzzlePiece img={img} row={row} column={column} number={number}/>
    </StyledPuzzleSliding>
  );
};

export default PuzzleSliding;
