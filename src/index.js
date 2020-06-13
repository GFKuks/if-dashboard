import React from 'react';
import ReactDOM from 'react-dom';

import Main from './Main/Main';

const title = 'React with Webpack and Babel';

ReactDOM.render(
  <Main title={title} />,
  document.getElementById('main'),
);

module.hot.accept();
