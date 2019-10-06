import React from 'react';
import styled, { withProps } from '../../styles/themed-components';
import Overlay from './Overlay';

interface IProps {
  img: string;
  gameReady: () => void;
}

const StyledGameHome = withProps<IProps, HTMLDivElement>(styled.div)`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: black;
  
  @keyframes pop {
    0% {
      transform: scale(1);
    }

    50% {
      transform: scale(1.3);
    }

    100% {
      transform: scale(1);
    }
  }

  & > * {
    position: absolute;
    z-index: 10;
  }

  & > h2 {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    color: white;
    font-size: 3rem;
    font-weight: 100;
    line-height: 6rem;
    text-align: center;
    height: 6rem;
    &: active {
      animation: pop 1s;
    }
  }
  & > p {
    top: 20%;
    left: 0
    width: 100%;
    text-align: center;
    color: rgba(240, 240, 240, .8);
    font-size: 2rem;
    font-weight: 100;
  }

  & > img {
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    filter: blur(4px);
    object-fit: cover;
    z-index: 0;
  }
`;

const GameHome = (props: IProps) => {
  const { img, gameReady } = props;
  const gameReadyAfter300 = () => setTimeout(() => {
    gameReady();
  },                                         300);
  return (
    <Overlay>
      <StyledGameHome>
        <p>sliding puzzle game</p>
        <h2 onClick={gameReadyAfter300}>Game Start</h2>
        <img src={img}/>
      </StyledGameHome>
    </Overlay>
  );
};

export default GameHome;
