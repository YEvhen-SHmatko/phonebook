import { createAction } from '@reduxjs/toolkit';
import types from './contactsTypes';

export const addContact = createAction(types.ADD_CONTACT);
export const removeContact = createAction(types.REMOVE_CONTACT);
export const setContactsWithLocalStorage = createAction(
  types.SET_CONTACTS_WITH_LOCAL_STORAGE,
);
