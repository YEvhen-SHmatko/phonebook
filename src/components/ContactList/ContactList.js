import React from 'react';
import PropTypes from 'prop-types';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import Styles from './ContactList.module.css';
import slide from '../../transition/slide.module.css';
import * as contactsActions from '../../redux/contacts/contactsActions';
import * as selectors from '../../redux/selectors';
import { saveToLocalStorage } from '../../services/localStorage';

const removeWithLocalStorage = (contacts, id) => {
  return contacts.filter(contact => contact.id !== id);
};
const ContactList = ({ filterContacts, removeContact }) => {
  const clickDelete = btnContact => {
    const { id } = btnContact.currentTarget;
    removeContact(id);
    saveToLocalStorage('contacts', removeWithLocalStorage(filterContacts, id));
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
                <span className={Styles['item-number']}>{contact.number}</span>
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
  removeContact: PropTypes.func.isRequired,
};
const mapStateToProps = store => ({
  filterContacts: selectors.getFilterContacts(store),
});
const mapDispatchToProps = dispatch => ({
  addContact: data => dispatch(contactsActions.addContact(data)),
  removeContact: id => dispatch(contactsActions.removeContact(id)),
});
export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
