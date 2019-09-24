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
  const { img, row, column, index } = props;
  const x = index % row;
  const y = Math.floor(index / row);
  return (
    <StyledPuzzlePiece src={img} x={x} y={y} row={row} column={column}/>
  );
};

export default PuzzlePiece;
