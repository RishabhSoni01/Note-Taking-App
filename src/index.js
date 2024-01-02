import React from 'react';
import ReactDOM from 'react-dom';
import './tailwind.css';
import App from './App';
import store from './redux/store';
import { Provider } from 'react-redux';

const root = document.getElementById('root');

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  root
);
