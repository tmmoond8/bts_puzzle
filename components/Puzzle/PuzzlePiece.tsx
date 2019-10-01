import styled, { withProps } from '../../styles/themed-components';
import { IPuzzlePiece } from './Puzzle';

const SIZE = 100;

const StyledPuzzlePiece = withProps<IPuzzlePiece, HTMLImageElement>(styled.img)`
  height: 400px;
  width: 300px;
  transform: translate(-${props => props.x * SIZE}px, -${props => props.y * SIZE}px);
  object-fit: cover;
`;

const PuzzlePiece = (props: IPuzzlePiece) => {
  const { img, row, column, number } = props;
  const x = number % row;
  const y = Math.floor(number / row);
  return (
    number !== -1 && <StyledPuzzlePiece src={img} x={x} y={y} row={row} column={column}/>
  );
};

export default PuzzlePiece;
