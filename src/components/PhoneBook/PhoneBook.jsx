import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ContactFormContainer from '../ContactForm/ContactFormContainer';
import FilterContainer from '../Filter/FilterContainer';
import ContactListContainer from '../ContactList/ContactListContainer';
import Styles from './PhoneBook.module.css';
import Error from '../Error/Error';
import Title from '../Title/Title';
import '../../transition/pnotify-style.css';
import { getToLocalStorage } from '../../services/localStorage';

class PhoneBook extends Component {
  static propTypes = {
    contactsLength: PropTypes.number.isRequired,
    filterContactsLength: PropTypes.number.isRequired,
    setContactsWithLocalStorage: PropTypes.func.isRequired,
  };

  state = {};

  componentDidMount() {
    const { setContactsWithLocalStorage } = this.props;
    const storage = getToLocalStorage('contacts');
    if (storage !== null) setContactsWithLocalStorage(storage);
  }

  render() {
    const { contactsLength, filterContactsLength } = this.props;
    return (
      <section className={Styles.section}>
        <Title size={34} animation>
          Phonebook
        </Title>
        <ContactFormContainer />
        <Title size={24}>Contacts</Title>
        {contactsLength > 1 && <FilterContainer />}
        {contactsLength > 0 && <ContactListContainer />}
        {contactsLength < 1 && <Error>Contact list is empty!</Error>}
        {filterContactsLength < 1 && contactsLength > 0 && (
          <Error>Contact not found!</Error>
        )}
      </section>
    );
  }
}

export default PhoneBook;
