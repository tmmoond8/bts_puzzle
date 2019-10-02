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
  const { img, columns, rows, number } = props;
  const x = number % columns;
  const y = Math.floor(number / columns);
  return (
    number !== -1 && <StyledPuzzlePiece src={img} x={x} y={y} columns={columns} rows={rows}/>
  );
};

export default PuzzlePiece;
