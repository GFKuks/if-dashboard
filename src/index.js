import React from 'react';
import ReactDOM from 'react-dom';

import Content from './Content/Content';

const title = 'React with Webpack and Babel';

ReactDOM.render(
  <Content title={title} />,
  document.getElementById('content'),
);

module.hot.accept();
