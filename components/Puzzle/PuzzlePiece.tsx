import styled, { withProps } from '../../styles/themed-components';
import { IPuzzlePiece } from '../Puzzle';

const StyledPuzzlePiece = withProps<IPuzzlePiece, HTMLImageElement>(styled.img)`
  ${({ theme, columns, rows }) => theme.puzzleSize(columns, rows)};
  transform: translate(-${props => props.x * props.size}px, -${props => props.y * props.size}px);
  object-fit: cover;
  ${({ theme }) => theme.media.phone`
    transform: translate(-${props => props.x * (100 / props.columns)}vw, -${props => props.y * (100 / props.columns)}vw);
  `}
`;

const PuzzlePiece = (props: IPuzzlePiece) => {
  const { img, columns, rows, number } = props;
  const x = number % columns;
  const y = Math.floor(number / columns);
  const size = 100 * (3 / columns);
  return (
    number !== -1 && <StyledPuzzlePiece src={img} x={x} y={y} columns={columns} rows={rows} size={size}/>
  );
};

export default PuzzlePiece;
