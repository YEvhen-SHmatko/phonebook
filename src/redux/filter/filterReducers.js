import types from './filterTypes';

const filterReducers = (filter = '', action) => {
  switch (action.type) {
    case types.ON_CHANGE:
      return [filter, action.payload.filter].join('');
    case types.ON_SUBMIT:
      return action.payload.filter;
    default:
      return filter;
  }
};
export default filterReducers;
