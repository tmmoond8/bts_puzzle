import React from 'react';

import { storiesOf } from '@storybook/react';
import PuzzlePiece from  './PuzzlePiece';
import Puzzle from  './Puzzle';

storiesOf('Puzzle', module)
  .add('PuzzlePiece', () => (
    <PuzzlePiece img="https://i.imgur.com/7bNfhgP.jpg" row={3} column={4} index={0} />
  )).add('Puzzle', () => (
    <Puzzle img="https://i.imgur.com/7bNfhgP.jpg"     />
  ));
