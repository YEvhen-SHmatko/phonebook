import React, { Component } from 'react';
import PNotify from 'pnotify/dist/es/PNotify';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import shortid from 'shortid';
import { connect } from 'react-redux';
import { ALL_ID } from '../../services/constants';
import pop from '../../transition/pop.module.css';
import Styles from './ContactForm.module.css';
import * as contactsActions from '../../redux/contacts/contactsActions';
import * as selectors from '../../redux/selectors';
import { saveToLocalStorage } from '../../services/localStorage';

const INITIAL_STATE = {
  name: '',
  number: '',
};

class ContactForm extends Component {
  static propTypes = {
    addContact: PropTypes.func.isRequired,
    contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
  };

  state = {
    ...INITIAL_STATE,
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  alert = name => {
    const message = `${name} is already is contacts`;
    PNotify.error({
      text: message,
      animate: {
        animate: true,
        in_class: 'bounceInDown',
        out_class: 'bounceOutUp',
      },
      animate_speed: 250,
      delay: 3000,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { addContact, contacts } = this.props;
    const { name, number } = this.state;
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase(),
      )
    ) {
      this.alert(name);
      return;
    }
    const contact = { id: shortid.generate(), name, number };
    addContact(contact);
    saveToLocalStorage('contacts', [...contacts, contact]);
    this.setState({ ...INITIAL_STATE });
  };

  render() {
    const { nameId, numberId } = ALL_ID;
    const { name, number } = this.state;
    const verificationLength = name.length === 0 || number.length === 0;
    const verificationNumber = Number.isNaN(Number(number)) || number === null;
    const isActiveButton = verificationLength || verificationNumber;
    const isActive = isActiveButton ? Styles.disabled : Styles.button;
    return (
      <CSSTransition in timeout={250} unmountOnExit classNames={pop}>
        <section className={Styles.section__contact}>
          <form onSubmit={this.handleSubmit} className={Styles.form__contact}>
            <label htmlFor={nameId} className={Styles['form__name-title']}>
              Name
              <input
                id={nameId}
                className={Styles['form__name-input']}
                onChange={this.handleChange}
                value={name}
                name="name"
                type="text"
                placeholder="Input name"
              />
            </label>
            <label htmlFor={numberId} className={Styles['form__name-title']}>
              Number
              <input
                id={numberId}
                className={Styles['form__name-input']}
                onChange={this.handleChange}
                value={number}
                name="number"
                type="tel"
                placeholder="Input phone"
              />
            </label>
            <button
              disabled={isActiveButton}
              type="submit"
              className={isActive}
            >
              Add contact
            </button>
          </form>
        </section>
      </CSSTransition>
    );
  }
}
const mapStateToProps = store => ({
  contacts: selectors.getContacts(store),
});
const mapDispatchToProps = dispatch => ({
  addContact: data => dispatch(contactsActions.addContact(data)),
});
export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
