import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'pnotify/dist/PNotifyBrightTheme.css';
import './styles/styles.css';
import App from './components/App/App';
import store from './redux/store';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
