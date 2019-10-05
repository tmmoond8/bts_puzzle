import PuzzleContainer from '../components/Puzzle';
const puzzle = [
  0, 1, 2,
  3, 4, 5,
  6, 7, 8,
  9, 10, -1,
];

const Index = () => (
  <PuzzleContainer img="https://i.imgur.com/7bNfhgP.jpg" puzzle={puzzle} columns={3}/>
);

export default Index;
