import types from './filterTypes';

export const onChange = value => {
  return {
    type: types.ON_CHANGE,
    payload: {
      filter: value,
    },
  };
};
export const onSubmit = value => {
  return {
    type: types.ON_SUBMIT,
    payload: {
      filter: value,
    },
  };
};
export const q = () => null;
