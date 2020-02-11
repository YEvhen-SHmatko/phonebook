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

// import types from './contactsTypes';

// const contactsReducers = (contacts = [], action) => {
//   switch (action.type) {
//     case types.ADD_CONTACT:
//       return [...contacts, action.payload.contacts];
//     case types.REMOVE_CONTACT:
//       return contacts.filter(contact => contact.id !== action.payload.id);
//     case types.SET_CONTACTS_WITH_LOCAL_STORAGE:
//       return action.payload.contacts;
//     default:
//       return contacts;
//   }
// };
export default contactsReducers;
