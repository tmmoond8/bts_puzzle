import React, { useState, useEffect } from 'react';
import styled from '../../styles/themed-components';

interface IProps {
  gameOver: () => void;
  time: number;
  setTime: (time: number) => void;
}

const StyledTimer = styled.div`
  padding: 10px;
  background-color: black;
  color: white;
`;

const Timer = (props: IProps) => {
  const { gameOver, time, setTime } = props;
  useEffect(() => {
    const timer = setTimeout(() => {
      if (Math.round(time) === 0) return gameOver();
      setTime(time - 0.01);
    },                       10);
    return () => clearTimeout(timer);
  },        [time]);

  return (
    <StyledTimer>
      Time remaining : {time.toFixed(2)}
    </StyledTimer>
  );
};

export default Timer;
