import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from "react-redux"
import Store from './store/Store';

ReactDOM.render(
  // <React.StrictMode>
    <Provider store={Store}>
      <App />
    </Provider>,

  // </React.StrictMode>,
  document.getElementById('root')
);