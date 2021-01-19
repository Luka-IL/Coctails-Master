import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/App';
import {createStore} from "redux";
import {Provider} from "react-redux";
import {reducer} from "./store/reducer";
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";
import "../node_modules/normalize.css/normalize.css";

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f);

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById(`root`)
);
