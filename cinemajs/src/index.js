import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";

import 'antd/dist/antd.css';
import './style/index.css';
import {store} from './store';

import App from './components/App';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

