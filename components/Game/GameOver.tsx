import styled from '../../styles/themed-components';

interface IProps {
  gameReady: () => void;
}

const StyledGameOver = styled.div`
  width: 100%;
  height: 100%;
  background-image: linear-gradient(to bottom, rgba(0,0,0, 0.8), rgba(0,0,0, 0.7), rgba(0,0,0, 0.5), rgba(0,0,0,0.3));
  text-align: center;
  color: white;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100%;
    h2 {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 3rem;
      line-height: 4rem;
      svg {
        margin-right: .5rem;
        transform: rotate(-215deg);
      }
    }
    h3 {
      font-size: 1.7rem;
      line-height: 3rem;
    }
  }
`;

const GameOver = (props: IProps) => {
  const { gameReady } = props;
  return (
    <StyledGameOver>
      <div>
        <h3>Time Over</h3>
        <h2 onClick={gameReady}>
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24">
            <path d="M13.5 2c-5.288 0-9.649 3.914-10.377 9h-3.123l4 5.917 4-5.917h-2.847c.711-3.972 4.174-7 8.347-7 4.687 0 8.5 3.813 8.5 8.5s-3.813 8.5-8.5 8.5c-3.015 0-5.662-1.583-7.171-3.957l-1.2 1.775c1.916 2.536 4.948 4.182 8.371 4.182 5.797 0 10.5-4.702 10.5-10.5s-4.703-10.5-10.5-10.5z" stroke="transparent" fill="white"/>
          </svg>
          Retry
        </h2>
      </div>
    </StyledGameOver>
  );
};

export default GameOver;
