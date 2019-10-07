import { withRouter } from 'next/router';
import Game from '../components/Game';
import { WithRouterProps } from 'next/dist/client/with-router';

interface IProps extends WithRouterProps {}

const games = [
  { img: 'https://i.imgur.com/7bNfhgP.jpg', columns: 3, rows: 4 },
  { img: 'https://i.imgur.com/vv4Wnvp.jpg', columns: 4, rows: 5 },
  { img: 'https://i.imgur.com/dMD8rGg.jpg', columns: 5, rows: 6 },
];

const Index = (props: IProps) => {
  const { router: { query: { id = 0 } } } = props;
  const game = games[parseInt(id.toString())];
  return (
    <Game {...game}/>
  );
};
export default withRouter(Index);
