import React, { useState, useEffect } from 'react';
import styled from '../../styles/themed-components';

interface IProps {
  gameOver: () => void;
  setTime: (time: number) => void;
  time: number;
}

const StyledTimer = styled.div`
  padding: 10px;
  background-color: black;
  color: white;
`;

const Timer = (props: IProps) => {
  const { gameOver, time, setTime } = props;
  const TIME_LIMIT = 60000;
  const [_time, _setTime] = useState(0);
  const [startTime, _] = useState(new Date().getTime());

  useEffect(() => {
    const timer = setTimeout(() => {
      const currentTime = new Date().getTime();
      const pastTime = currentTime - startTime;
      if (pastTime > 60000) {
        gameOver();
      }
      setTime(pastTime);
      _setTime(pastTime);
    },                       10);
    return () => clearTimeout(timer);
  },        [_time]);

  return (
    <StyledTimer>
      Time remaining : {((TIME_LIMIT - time) / 1000).toFixed(2)}
    </StyledTimer>
  );
};

export default Timer;
