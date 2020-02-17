import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'pnotify/dist/PNotifyBrightTheme.css';
import AppContainer from './components/App/AppContainer';
import store from './redux/store';

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('root'),
);
