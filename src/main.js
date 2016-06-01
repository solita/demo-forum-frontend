// Polyfill
import 'babel-polyfill';

// React
import React from 'react';
import ReactDOM from 'react-dom';

// Styling
import './common/base.css';

// Component
import App from './components/app';

// Application Root in DOM
const APPLICATION_ELEMENT_ID = 'demo-app';

ReactDOM.render(<App />, document.getElementById(APPLICATION_ELEMENT_ID));
