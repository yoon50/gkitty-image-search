import './main.css';

import React from 'react';
import ReactDOM from 'react-dom';

var ImageSearchApp = require('./components/ImageSearchApp.jsx');

main();

function main() {
    const app = document.createElement('div');
    document.body.appendChild(app);
    ReactDOM.render(<ImageSearchApp />, app);
}