/** Wraps Regions from https://www.npmjs.com/package/react4xp-regions */
import React from 'react';

import './css/threecolumn.css';

// eslint-disable-next-line import/no-extraneous-dependencies
import Regions from '@enonic/react-components/Regions';


export default function Layout1({ regionsData, names }) {
  const classes = {
    left: 'left-region',
    middle: 'middle-region',
    right: 'right-region',
  }

  return (
    <div className='regions-container'>
      <Regions {...{ regionsData, names, classes }} />
    </div>
  );
}
