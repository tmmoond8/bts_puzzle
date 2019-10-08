import React, { useState } from 'react';
import styled, { withProps } from '../../styles/themed-components';
import Puzzle from '../Puzzle';
import GameOver from './GameOver';
import GameClear from './GameClear';
import GameHome from './GameHome';
import GameReady from './GameReady';
import { GameStatus } from '../Game';
import { createPuzzle } from '../../lib/gameManager';
import Timer from '../Timer';
import Overlay from './Overlay';

interface IProps {
  img: string;
  columns: number;
  rows: number;
}

const StyledGame = withProps<any, HTMLDivElement>(styled.div)`
  ${({ theme, rows, columns }) => theme.puzzleSize(columns, rows)};
  section {
    position: relative;
  }
`;

const OverlayContents = (props: {
  gameStatus,
  setGameStatus: (status: GameStatus) => void,
  img: string,
  setNewPuzzle: () => void,
  time: number,
}) => {
  const { gameStatus, setGameStatus, img, setNewPuzzle, time } = props;
  if (gameStatus === 'join')  {
    return <GameHome img={img} gameReady={() => setGameStatus('ready')}/>;
  }
  if (gameStatus === 'ready') {
    return <GameReady img={img} gameStart={() => (setGameStatus('playing'), setNewPuzzle())}/>;
  }
  if (gameStatus === 'over') {
    return <GameOver gameReady={() => (setGameStatus('ready'), setNewPuzzle())}/>;
  }
  if (gameStatus === 'clear') {
    return <GameClear time={time} gameReady={() => (setGameStatus('ready'), setNewPuzzle())}/>;
  }
  return null;
};

const Game = (props: IProps) => {
  const { img, columns, rows } = props;
  const [gameStatus, setGameStatus] = useState('join');
  const [puzzle, setPuzzle] = useState([]);
  const [time, setTime] = useState(60);
  const setNewPuzzle = () => setPuzzle(createPuzzle({ columns, rows }));

  return (
    <StyledGame columns={columns} rows={rows}>
      <section>
        {gameStatus !== 'playing'&& (
          <Overlay columns={columns} rows={rows}>
            <OverlayContents
              gameStatus={gameStatus}
              setGameStatus={setGameStatus}
              img={img}
              setNewPuzzle={setNewPuzzle}
              time={time}
            />
          </Overlay>
        )} 
        <Puzzle
          img={img}
          columns={columns}
          rows={rows}
          puzzle={puzzle}
          gameStatus={gameStatus as any}
          gameClear={() => setGameStatus('clear')}
        />
      </section>
      {gameStatus === 'playing' && <Timer time={time} setTime={setTime} gameOver={() => setGameStatus('over')}/>}
    </StyledGame>
  );
};

export default Game;
