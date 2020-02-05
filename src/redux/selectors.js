export const getContacts = store => store.phoneBook.contacts;
export const getFilterContacts = store =>
  store.phoneBook.contacts.filter(contact => {
    const nameContact = contact.name;
    const name = store.phoneBook.filter;
    return nameContact.toLowerCase().includes(name.toLowerCase());
  });
export const getContactsLength = store => getContacts(store).length;
export const getFilterContactsLength = store => getFilterContacts(store).length;
