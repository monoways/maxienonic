/** Wraps Regions from https://www.npmjs.com/package/react4xp-regions */
import React from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies
import Regions from '@enonic/react-components/Regions';

const Layout1 = ({ regionsData, names }) => (
  <Regions {...{ regionsData, names }} />
);

export default Layout1;
