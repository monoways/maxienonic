/** Wraps Regions from https://www.npmjs.com/package/react4xp-regions */
import React from 'react';

import styles from './css/twocolumn.module.css';

// eslint-disable-next-line import/no-extraneous-dependencies
import Regions from '@enonic/react-components/Regions';


export default function Layout1({ regionsData, names }) {
  const classes = {
    // left: 'leftRegion',
    // right: 'rightRegion',
    left: styles.leftRegion,
    right: styles.rightRegion,
  }

  return (
    <div className={styles.regionsContainer}>
      <Regions {...{ regionsData, names, classes }} />
    </div>
  );
}
