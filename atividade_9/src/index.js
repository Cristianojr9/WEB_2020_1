import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import Firebase from './utils/Firebase';
import FirebaseContext from './utils/FirebaseContext';

ReactDOM.render(
  <FirebaseContext.Provider value={new Firebase()}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </FirebaseContext.Provider>,
  document.getElementById('root')
);

