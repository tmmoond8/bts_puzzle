import React, { useState } from 'react';
import styled from '../../styles/themed-components';
import Puzzle from '../Puzzle/Puzzle';
import GameOver from './GameOver';
import GameHome from './GameHome';
import GameReady from './GameReady';
import { IContext } from '../Game';

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
  setGameStatus: (status: IContext['gameStatus']) => void,
  img: string,
}) => {
  const { gameStatus, setGameStatus, img } = props;
  if (gameStatus === 'join')  {
    return <GameHome img={img} gameReady={() => setGameStatus('ready')}/>;
  }
  if (gameStatus === 'ready') {
    return <GameReady img={img} gameStart={() => setGameStatus('playing')}/>;
  }
  if (gameStatus === 'over') {
    return <GameOver/>;
  }
  return null;
};

const Game = (props: IProps) => {
  const { img } = props;
  const [gameStatus, setGameStatus] = useState('join');
  return (
    <StyledGame>
      <section>
        <Overlay
          gameStatus={gameStatus}
          setGameStatus={setGameStatus}
          img={img}
        />
      </section>
    </StyledGame>
  );
};

export default Game;
