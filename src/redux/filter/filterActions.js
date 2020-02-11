import { createAction } from '@reduxjs/toolkit';

import types from './filterTypes';

const filterAction = createAction(types.ON_CHANGE);
export default filterAction;
