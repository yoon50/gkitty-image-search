import './main.css';

import React from 'react';
import ReactDOM from 'react-dom';

var ImageSearchApp = require('./components/ImageSearchApp.jsx');

require('./pinterest/sdk.js');
PDK.init({
    appId: "4810864636186345530", // Change this
    cookie: true
});

// why error here?
PDK.login({ scope : 'read_public' }, ()=>{});

main();

function main() {
    const app = document.createElement('div');
    document.body.appendChild(app);
    ReactDOM.render(<ImageSearchApp />, app);
}