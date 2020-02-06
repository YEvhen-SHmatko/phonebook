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
    const nameIsValid = name.length > 5;
    const numberIsValid = number.length >= 10 && number.length < 12;
    const isActiveName =
      nameIsValid || name.length === 0
        ? Styles.form__input
        : Styles['form__input-invalid'];
    const isActiveNumber =
      numberIsValid || number.length === 0
        ? Styles.form__input
        : Styles['form__input-invalid'];
    const isActiveBTN = nameIsValid && numberIsValid;
    const isActive = isActiveBTN ? Styles.button : Styles.disabled;

    return (
      <CSSTransition in timeout={250} unmountOnExit classNames={pop}>
        <section className={Styles.section__contact}>
          <form onSubmit={this.handleSubmit} className={Styles.form__contact}>
            <label htmlFor={nameId} className={Styles.form__title}>
              Name
              <input
                id={nameId}
                className={isActiveName}
                onChange={this.handleChange}
                value={name}
                name="name"
                type="text"
                placeholder="Input name"
              />
            </label>
            <label htmlFor={numberId} className={Styles.form__title}>
              Number
              <input
                id={numberId}
                type="number"
                className={isActiveNumber}
                required
                onChange={this.handleChange}
                value={number}
                name="number"
                placeholder="Number 10 or 12 symbol"
              />
            </label>
            <button disabled={!isActiveBTN} type="submit" className={isActive}>
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
