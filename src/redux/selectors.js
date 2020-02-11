export const getContacts = store => {
  return store.contacts;
};
export const getFilter = store => {
  return store.filter;
};
export const getFilterContacts = store =>
  getContacts(store).filter(contact => {
    const nameContact = contact.name;
    const name = getFilter(store);
    return nameContact.toLowerCase().includes(name.toLowerCase());
  });
export const getContactsLength = store => getContacts(store).length;
export const getFilterContactsLength = store => getFilterContacts(store).length;
