import React from 'react';
import PropTypes from 'prop-types';
import ContactFormContainer from '../ContactForm/ContactFormContainer';
import FilterContainer from '../Filter/FilterContainer';
import ContactListContainer from '../ContactList/ContactListContainer';
import Styles from './App.module.css';
import Title from '../Title/Title';
import Notice from '../Notice/Notice';
import '../../transition/pnotify-style.css';

const App = ({ contactsLength, filterContactsLength }) => {
  return (
    <section className={Styles.section}>
      <Title size={34} animation>
        Phonebook
      </Title>
      <ContactFormContainer />
      <Title size={24}>Contacts</Title>
      {contactsLength > 0 && (
        <>
          {contactsLength > 1 && <FilterContainer />}
          <ContactListContainer />
        </>
      )}
      {contactsLength < 1 && <Notice>Contact list is empty!</Notice>}
      {filterContactsLength < 1 && contactsLength > 0 && (
        <Notice>Contact not found!</Notice>
      )}
    </section>
  );
};
App.propTypes = {
  contactsLength: PropTypes.number.isRequired,
  filterContactsLength: PropTypes.number.isRequired,
};
export default App;
