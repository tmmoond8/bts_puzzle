import Puzzle from '../components/Puzzle';
import Game from '../components/Game';

const puzzle = [
  0, 1, 2,
  3, 4, 5,
  6, 7, 8,
  9, -1, 10,
];

const gameState = 'playing';

const Index = () => (
  <Game img="https://i.imgur.com/7bNfhgP.jpg"/>
  // <Puzzle img="https://i.imgur.com/7bNfhgP.jpg" puzzle={puzzle} columns={3} gameStatus={gameState}/>
);

export default Index;
