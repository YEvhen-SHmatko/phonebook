import { createReducer } from '@reduxjs/toolkit';

import types from './filterTypes';

const initialState = '';
const filterReducers = createReducer(initialState, {
  [types.ON_CHANGE]: (state, action) => action.payload,
});
// const filterReducers = (filter = '', action) => {
//   switch (action.type) {
//     case types.ON_CHANGE:
//       return action.payload.filter;
//     default:
//       return filter;
//   }
// };
export default filterReducers;
