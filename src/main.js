// Polyfill
import 'babel-polyfill';

// React
import React from 'react';
import ReactDOM from 'react-dom';

// Styling
import './styles/base.css';

// Component
import ForumContainer from './components/ForumContainer';

// Application Root in DOM
const APPLICATION_ELEMENT_ID = 'demo-app';

ReactDOM.render(<ForumContainer />, document.getElementById(APPLICATION_ELEMENT_ID));
