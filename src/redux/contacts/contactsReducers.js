import { createReducer } from '@reduxjs/toolkit';

import types from './contactsTypes';

const initialState = [];
const contactsReducers = createReducer(initialState, {
  [types.ADD_CONTACT]: (contacts, action) => {
    return [...contacts, action.payload];
  },
  [types.REMOVE_CONTACT]: (contacts, action) => {
    return contacts.filter(contact => contact.id !== action.payload);
  },
  [types.SET_CONTACTS_WITH_LOCAL_STORAGE]: (contacts, action) => {
    return action.payload;
  },
});
export default contactsReducers;
