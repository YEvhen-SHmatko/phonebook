import { createReducer } from '@reduxjs/toolkit';

import types from './filterTypes';

const initialState = '';
const filterReducers = createReducer(initialState, {
  [types.ON_CHANGE]: (state, action) => action.payload,
});
export default filterReducers;
