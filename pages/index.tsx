import Puzzle from '../components/Puzzle';
const puzzle = [
  0, 1, 2,
  3, 4, 5,
  6, 7, 8,
  9,
];

const Index = () => (
  <Puzzle img="https://i.imgur.com/7bNfhgP.jpg" puzzle={puzzle} row={3}/>
);

export default Index;
