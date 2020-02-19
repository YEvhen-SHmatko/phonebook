import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import shortid from 'shortid';
import Notification from '../Information/Information';
import { ALL_ID, errorHandler, IS_ACTIVE_BTN } from '../../services/constants';
import pop from '../../transition/pop.module.css';
import Styles from './ContactForm.module.css';
import {
  saveToLocalStorage,
  getToLocalStorage,
} from '../../services/localStorage';
import notification from '../../services/notification';

const INITIAL_STATE = {
  name: '',
  number: '',
  error: {
    name: null,
    number: null,
  },
};

class ContactForm extends Component {
  static propTypes = {
    setContactsWithLocalStorage: PropTypes.func.isRequired,
    addContact: PropTypes.func.isRequired,
    contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
  };

  state = {
    ...INITIAL_STATE,
  };

  componentDidMount() {
    const { setContactsWithLocalStorage } = this.props;
    const storage = getToLocalStorage('contacts');
    if (storage !== null) setContactsWithLocalStorage(storage);
  }

  handleChange = e => {
    const { error } = this.state;
    this.setState({
      [e.target.name]: e.target.value,
      error: errorHandler(e.target, error),
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { addContact, contacts } = this.props;
    const { name, number } = this.state;
    const isContactExits = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase(),
    );
    if (isContactExits) {
      notification(name);
      return;
    }
    const contact = {
      id: shortid.generate(),
      name,
      number,
    };
    addContact(contact);
    saveToLocalStorage('contacts', [...contacts, contact]);
    this.setState({ ...INITIAL_STATE });
  };

  render() {
    const { nameId, numberId } = ALL_ID;
    const { name, number, error } = this.state;
    const isActive = IS_ACTIVE_BTN(error);
    const btnStyles = isActive ? Styles.disabled : Styles.button;
    return (
      <CSSTransition in timeout={250} unmountOnExit classNames={pop}>
        <section className={Styles.section__contact}>
          <form onSubmit={this.handleSubmit} className={Styles.form__contact}>
            <div>
              <label htmlFor={nameId} className={Styles.form__title}>
                Name
                <input
                  id={nameId}
                  autoComplete="off"
                  className={Styles.form__input}
                  onChange={this.handleChange}
                  value={name}
                  name="name"
                  type="text"
                  placeholder="Input name"
                />
              </label>
            </div>
            <div>
              {!!error.name && (
                <Notification>Min length name three symbol.</Notification>
              )}
            </div>
            <div className={Styles.mt20}>
              <label htmlFor={numberId} className={Styles.form__title}>
                Number
                <input
                  id={numberId}
                  type="number"
                  autoComplete="off"
                  className={Styles.form__input}
                  onChange={this.handleChange}
                  value={number}
                  name="number"
                  placeholder="phone 10 number"
                />
              </label>
            </div>
            <div>
              {!!error.number && (
                <Notification>Length number 10 or 12 symbol.</Notification>
              )}
            </div>
            <div className={Styles.mt20} />
            <button
              disabled={isActive}
              onClick={this.handleSubmit}
              type="submit"
              className={btnStyles}
            >
              Add contact
            </button>
          </form>
        </section>
      </CSSTransition>
    );
  }
}

export default ContactForm;
