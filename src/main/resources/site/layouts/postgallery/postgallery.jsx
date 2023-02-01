/** Wraps Regions from https://www.npmjs.com/package/react4xp-regions */
import React from 'react';

import styles from './css/postgallery.module.css';

// eslint-disable-next-line import/no-extraneous-dependencies
import Regions from '@enonic/react-components/Regions';


export default function Layout1({ regionsData, names }) {
  const classes = {
    main: styles.mainRegion,
  }

  return (
    <div className={styles.posterGallery}>
      <Regions {...{ regionsData, names, classes }} />
    </div>
  );
}
