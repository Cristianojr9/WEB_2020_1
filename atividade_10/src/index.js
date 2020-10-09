import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css';
import App from './App';

import { Provider } from 'react-redux'
import storeConfig from './store/storeConfig'

ReactDOM.render(
  <Provider store={storeConfig()}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);


