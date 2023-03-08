import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App2 } from './App';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import 'animate.css'
import { Provider } from 'react-redux';
import { store } from './store/Store';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App2 />
    </BrowserRouter>
  </Provider>
);

