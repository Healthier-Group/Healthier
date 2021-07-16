import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppGlobal from './AppGlobal.jsx';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './redux/store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}> 
      <AppGlobal/>
    </Provider> 
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
