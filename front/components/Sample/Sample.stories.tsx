import React from 'react';

import { storiesOf } from '@storybook/react';
import Sample from  './Sample';

storiesOf('Sample', module)
  .add('Sample', () => (
    <Sample text="Sample"      />
  ));
