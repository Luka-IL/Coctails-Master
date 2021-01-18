import "materialize-css/dist/css/materialize.min.css"
import "materialize-css/dist/js/materialize.min.js"
import "../node_modules/normalize.css/normalize.css";
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
