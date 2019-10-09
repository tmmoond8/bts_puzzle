import React from 'react';

import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import Timer from  './Timer';

storiesOf('Timer', module)
  .add('Timer', () => (
    <Timer gameOver={action('game over')} time={44} setTime={action('set time')}/>
  ));
