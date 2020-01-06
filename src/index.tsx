import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Nav from './components/Nav/Nav';


ReactDOM.render(
  <Nav/>,
  document.getElementById('root')!
);
registerServiceWorker();
