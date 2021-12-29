import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { searchRobots } from './reducers';
import './index.css';
import App from './containers/App';
import 'tachyons';

const store = createStore(searchRobots);

// <Provider> is a component which passes redux store to all wrapped components,
// without manually passing store as props to some component
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
