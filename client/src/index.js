import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppGlobal from './AppGlobal.jsx';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './redux/store';
import axios from 'axios'
import dotenv from "dotenv";
dotenv.config();

axios.defaults.baseURL = 'http://localhost:3001' || "/";
ReactDOM.render(
  
    <Provider store={store}>
      <AppGlobal/>
    </Provider>,
  document.getElementById("root")
);

reportWebVitals();
