import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
// import { applyMiddleware } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import logger from './middleware/logger';
// import timeout from './middleware/timeout';
// import throttle from './middleware/throttle';

// const middleware = [logger, throttle, timeout];
// const enhancer = composeWithDevTools(applyMiddleware(...middleware));

const store = configureStore({
  reducer: rootReducer,
  // defaultEnhancers: enhancer,
  devTools: process.env.NODE_ENV,
});

export default store;
