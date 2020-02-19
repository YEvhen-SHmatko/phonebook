import React from 'react';
import Phonebook from '../Phonebook/Phonebook';
import ContactListContainer from '../ContactList/ContactListContainer';
import '../../transition/pnotify-style.css';
import ContactFormContainer from '../ContactForm/ContactFormContainer';

const App = () => {
  return (
    <>
      <Phonebook />
      <ContactFormContainer />
      <ContactListContainer />
    </>
  );
};
export default App;
