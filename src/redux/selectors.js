import { createSelector } from 'reselect';

export const getContacts = store => {
  return store.contacts;
};
export const getFilter = store => {
  return store.filter;
};
export const getFilterContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) =>
    contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    ),
);
