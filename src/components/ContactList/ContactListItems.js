import React from 'react';
import PropTypes from 'prop-types';
import Styles from './ContactList.module.css';
import { MUTE_NUMBER } from '../../services/constants';

const ContactListItems = ({ data, onClick }) => {
  return (
    <>
      <li key={data.id} className={Styles.item}>
        <div className={Styles['item-wrap']}>
          <span className={Styles['item-name']}>{data.name}:</span>
          <span className={Styles['item-number']}>
            {MUTE_NUMBER(data.number)}
          </span>
        </div>
        <button
          id={data.id}
          className={Styles.button}
          type="button"
          onClick={onClick}
        >
          <i className="large material-icons">backspace</i>
        </button>
      </li>
    </>
  );
};
ContactListItems.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};
export default ContactListItems;
