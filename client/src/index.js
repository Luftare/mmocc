import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CenturyClub from './CenturyClub';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<CenturyClub />, document.getElementById('root'));
registerServiceWorker();
