import { createAction } from '@reduxjs/toolkit';

import types from './filterTypes';

const filterAction = createAction(types.ON_CHANGE);

// const filterAction = value => {
//   return {
//     type: types.ON_CHANGE,
//     payload: {
//       filter: value,
//     },
//     // meta: {
//     //   delay: 800,
//     //   throttle: 800,
//     // },
//   };
// };
export default filterAction;
