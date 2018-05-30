import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CalendarBox from './CalendarBox';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<CalendarBox />, document.getElementById('root'));
registerServiceWorker();
