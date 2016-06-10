// Polyfill
import 'babel-polyfill';

// React
import React from 'react';
import ReactDOM from 'react-dom';

// Styling
import './styles/base.css';

// Application Root in DOM
const APPLICATION_ELEMENT_ID = 'demo-app';

ReactDOM.render(<h1>Pew pew</h1>, document.getElementById(APPLICATION_ELEMENT_ID));
