import styled, { withProps } from '../../styles/themed-components';
import PuzzlePiece from './PuzzlePiece';
import { IPuzzleSliding } from './Puzzle';

const StyledPuzzleSliding = withProps<IPuzzleSliding, HTMLLIElement>(styled.li)`
  position: absolute;
  width: ${props => 100 / props.row}%;
  height: ${props => 100 / props.column}%;
  overflow: hidden;
  left: 0;
  top: 0;
  transform: translate(${props =>  props.x * 100}%, ${props => props.y * 100}%);
`;

const PuzzleSliding = (props: IPuzzleSliding) => {
  const { row, column, index, img, x, y } = props;
  return (
    <StyledPuzzleSliding key={index} x={x} y={y} row={row} column={column}>
      <PuzzlePiece img={img} row={row} column={column} index={index}/>
    </StyledPuzzleSliding>
  );
};

export default PuzzleSliding;
