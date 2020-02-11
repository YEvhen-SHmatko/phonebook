import { configureStore } from '@reduxjs/toolkit';
import contactsReducers from './contacts/contactsReducers';
import filterReducers from './filter/filterReducers';
// import { applyMiddleware } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import logger from './middleware/logger';
// import timeout from './middleware/timeout';
// import throttle from './middleware/throttle';

// const middleware = [logger, throttle, timeout];
// const enhancer = composeWithDevTools(applyMiddleware(...middleware));

const store = configureStore({
  reducer: {
    contacts: contactsReducers,
    filter: filterReducers,
  },
  // defaultEnhancers: enhancer,
  devTools: process.env.NODE_ENV,
});

export default store;
