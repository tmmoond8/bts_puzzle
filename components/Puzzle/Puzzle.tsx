import styled from '../../styles/themed-components';
import PuzzleSliding from './PuzzleSliding';

interface IProps {
  img: string;
}

export interface IPuzzlePiece {
  img: string;
  row: number;
  column: number;
  index: number;
}

export interface IPuzzleSliding extends IPuzzlePiece{
  x: number;
  y: number;
}

const Wrapper = styled.div`
  display: flex;
`;

const StyledPuzzle = styled.ul`
  position: relative;
  width: 300px;
  height: 400px;
`;

const Puzzle = (props: IProps) => {
  const { img } = props;
  const pieces = new Array(12).fill('_');
  const row = 3;
  const column = 4;
  return (
    <Wrapper>
      <StyledPuzzle>
        {pieces.map((_, idx) => <PuzzleSliding img={img} row={row} column={column} index={idx} x={idx % row} y={Math.floor(idx / row)}/>)}
      </StyledPuzzle>
      <img src={img} style={{ width: '300px', height: '400px', objectFit: 'cover',
        objectPosition: 'center'}}/>
    </Wrapper>
  );
};

export default Puzzle;
