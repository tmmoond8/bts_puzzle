import React, { useState, useEffect } from 'react';
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
  games: any[];
  step: string;
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
  nextGame: string;
}) => {
  const { gameStatus, setGameStatus, img, setNewPuzzle, time, nextGame } = props;
  if (gameStatus === 'join')  {
    return <GameHome img={img} gameReady={() => setGameStatus('ready')}/>;
  }
  if (gameStatus === 'ready') {
    return <GameReady img={img} gameStart={() => (setGameStatus('playing'))}/>;
  }
  if (gameStatus === 'over') {
    return <GameOver gameReady={() => (setGameStatus('ready'), setNewPuzzle())}/>;
  }
  if (gameStatus === 'clear') {
    return <GameClear time={time} gameReady={() => (setGameStatus('ready'), setNewPuzzle())} nextGame={nextGame}/>;
  }
  return null;
};

const Game = (props: IProps) => {
  const { games, step } = props;
  const { columns, img, rows } = games[step];
  const [gameStatus, setGameStatus] = useState('join');
  const [puzzle, setPuzzle] = useState([]);
  const [time, setTime] = useState(0);
  const setNewPuzzle = () => setPuzzle(createPuzzle({ columns, rows }));
  const nextGame = games.length > parseInt(step) + 1 ? `/?step=${parseInt(step) + 1}` : null;

  useEffect(() => {
    setNewPuzzle();
  },        [step]);

  return (
    <StyledGame columns={columns} rows={rows}>
      <section>
        {gameStatus !== 'playing' && (
          <Overlay columns={columns} rows={rows}>
            <OverlayContents
              gameStatus={gameStatus}
              setGameStatus={setGameStatus}
              img={img}
              setNewPuzzle={setNewPuzzle}
              time={time}
              nextGame={nextGame}
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
