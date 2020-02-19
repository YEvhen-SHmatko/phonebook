import React from 'react';
import PropTypes from 'prop-types';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Styles from './ContactList.module.css';
import slide from '../../transition/slide.module.css';
import { saveToLocalStorage } from '../../services/localStorage';
import Title from '../Title/Title';
import FilterContainer from '../Filter/FilterContainer';
import Notice from '../Notice/Notice';
import ContactListItems from './ContactListItems';

const removeWithLocalStorage = (contacts, id) => {
  return contacts.filter(contact => contact.id !== id);
};
const ContactList = ({
  contacts,
  filterContacts,
  removeContact,
  handleChange,
}) => {
  const clickDelete = btnContact => {
    const { id } = btnContact.currentTarget;
    removeContact(id);
    saveToLocalStorage('contacts', removeWithLocalStorage(contacts, id));
  };
  if (contacts.length === 1) {
    handleChange('');
  }
  return (
    <>
      <Title size={24}>Contacts</Title>
      {contacts.length > 0 && (
        <>
          {contacts.length > 1 && <FilterContainer />}
          <TransitionGroup component="ul" className={Styles.list}>
            {filterContacts.map(contact => (
              <CSSTransition
                key={contact.id}
                timeout={250}
                unmountOnExit
                classNames={slide}
              >
                <ContactListItems data={contact} onClick={clickDelete} />
              </CSSTransition>
            ))}
          </TransitionGroup>
        </>
      )}
      {contacts.length < 1 && <Notice>Contact list is empty!</Notice>}
      {filterContacts.length < 1 && contacts.length > 0 && (
        <Notice>Contact not found!</Notice>
      )}
    </>
  );
};
ContactList.propTypes = {
  filterContacts: PropTypes.arrayOf(PropTypes.object).isRequired,
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
  removeContact: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default ContactList;
