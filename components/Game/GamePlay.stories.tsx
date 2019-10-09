import React from 'react';

import { storiesOf } from '@storybook/react';
import GameOver from  './GameOver';
import GameReady from  './GameReady';
import GameHome from  './GameHome';
import Game from  './Game';
import { action } from '@storybook/addon-actions';

storiesOf('Game', module)
  .add('GameOver', () => (
    <GameOver gameReady={action('game ready')}/>
  )).add('GameReady', () => (
    <GameReady img="https://i.imgur.com/7bNfhgP.jpg" gameStart={action('game start')}/>
  )).add('GameHome', () => (
    <GameHome img="https://i.imgur.com/7bNfhgP.jpg" gameReady={action('game Ready')}/>
  )).add('Game', () => (
    <Game games={[{ img: 'https://i.imgur.com/7bNfhgP.jpg', columns: 3, rows: 4 }]} step={'0'}/>
  ));
