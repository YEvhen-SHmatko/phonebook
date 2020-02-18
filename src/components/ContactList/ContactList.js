import React from 'react';
import PropTypes from 'prop-types';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Styles from './ContactList.module.css';
import slide from '../../transition/slide.module.css';
import { saveToLocalStorage } from '../../services/localStorage';
import { MUTE_NUMBER } from '../../services/constants';

const removeWithLocalStorage = (contacts, id) => {
  return contacts.filter(contact => contact.id !== id);
};
const ContactList = ({ contacts, filterContacts, removeContact }) => {
  const clickDelete = btnContact => {
    const { id } = btnContact.currentTarget;
    removeContact(id);
    saveToLocalStorage('contacts', removeWithLocalStorage(contacts, id));
  };

  return (
    <>
      <TransitionGroup component="ul" className={Styles.list}>
        {filterContacts.map(contact => (
          <CSSTransition
            key={contact.id}
            timeout={250}
            unmountOnExit
            classNames={slide}
          >
            <li key={contact.id} className={Styles.item}>
              <div className={Styles['item-wrap']}>
                <span className={Styles['item-name']}>{contact.name}:</span>
                <span className={Styles['item-number']}>
                  {MUTE_NUMBER(contact.number)}
                </span>
              </div>
              <button
                id={contact.id}
                className={Styles.button}
                type="button"
                onClick={clickDelete}
              >
                <i className="large material-icons">backspace</i>
              </button>
            </li>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </>
  );
};
ContactList.propTypes = {
  filterContacts: PropTypes.arrayOf(PropTypes.object).isRequired,
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
  removeContact: PropTypes.func.isRequired,
};

export default ContactList;
