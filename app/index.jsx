import './main.css';

import React from 'react';
import ReactDOM from 'react-dom';

var App = require('./components/App.jsx');
//var SearchTool = require('./components/SearchTool.jsx');

main();

/*
var handleSearch = function(keyword) {
	alert(keyword);
};
*/

function main() {
  const app = document.createElement('div');

  document.body.appendChild(app);
  
  ReactDOM.render(<App />, app);
}