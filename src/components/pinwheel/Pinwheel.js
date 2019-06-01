import React, { Fragment } from 'react';
import pinwheel from './pinwheel-loader.gif';

export default () => (
  <Fragment>
    <img
      src={pinwheel}
      style={{ width: '100px', margin: 'auto', display: 'block' }}
      alt='Loading...'
    />
  </Fragment>
);
