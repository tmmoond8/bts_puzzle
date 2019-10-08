import React, { useState } from 'react';
import styled from '../../styles/themed-components';
import Puzzle from '../Puzzle';
import GameOver from './GameOver';
import GameClear from './GameClear';
import GameHome from './GameHome';
import GameReady from './GameReady';
import { GameStatus } from '../Game';
import { createPuzzle } from '../../lib/gameManager';
import Timer from '../Timer';

interface IProps {
  img: string;
}

const StyledGame = styled.div`
  width: 300px;
  height: 400px;
  user-select: none;
  ${({ theme }) => theme.media.phone`
    width: 100vw;
    height: 133.3vw;
  `}
  section {
    position: relative;
  }
`;

const Overlay = (props: {
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
  const { img } = props;
  const columns = 3;
  const [gameStatus, setGameStatus] = useState('join');
  const [puzzle, setPuzzle] = useState([]);
  const [time, setTime] = useState(60);
  const setNewPuzzle = () => setPuzzle(createPuzzle({ columns, rows: 4 }));

  return (
    <StyledGame>
      <section>
        <Overlay
          gameStatus={gameStatus}
          setGameStatus={setGameStatus}
          img={img}
          setNewPuzzle={setNewPuzzle}
          time={time}
        />
        <Puzzle
          img={img}
          columns={columns}
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
