/** Wraps Regions from https://www.npmjs.com/package/react4xp-regions */
import React from 'react';

import './css/fourcolumn.css';

// eslint-disable-next-line import/no-extraneous-dependencies
import Regions from '@enonic/react-components/Regions';


export default function Layout1({ regionsData, names }) {
  const classes = {
    left: 'left-region',
    middleLeft: 'middle-left-region',
    middleRight: 'middle-right-region',
    right: 'right-region',
  }

  return (
    <div className='regions-container'>
      <Regions {...{ regionsData, names, classes }} />
    </div>
  );
}
