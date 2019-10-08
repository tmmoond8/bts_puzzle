import React, { useState, useEffect } from 'react';
import styled from '../../styles/themed-components';
import Overlay from './Overlay';

interface IProps {
  img: string;
  gameStart: () => void;
}

const StyledGameReady = styled.div`
  width: 100%;
  height: 100%;
  background-image: linear-gradient(to bottom, rgba(0,0,0, 0.5), rgba(0,0,0, 0.4), rgba(0,0,0, 0.4), rgba(0,0,0,0.3));
  & > * {
    position: absolute;
    z-index: 10;
  }

  & > h2 {
    height: 6rem;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    color: white;
    font-size: 7rem;
    font-weight: 100;
    text-align: center;
    &:active {
      animation: pop 1s;
    }
  }

  & > img {
    @keyframes focus {
      from {
        filter: blur(4px);
      }
      to {
        filter: none;
      }
    }
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 0;
    animation: focus .5s;
  }
`;

const GameReady = (props: IProps) => {
  const { img, gameStart } = props;
  const [count, setCount] = useState(1);
  useEffect(() => {
    const timer = setTimeout(() => {
      if (count === 1) return gameStart();
      setCount(count - 1);
    },                       1000);
    return () => clearTimeout(timer);
  },        [count]);
  return (
    <StyledGameReady>
      <h2>{count}</h2>
      <img src={img}/>
    </StyledGameReady>
  );
};

export default GameReady;
