import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import pop from '../../transition/pop.module.css';
import Styles from './Filter.module.css';
import { ALL_ID } from '../../services/constants';

const Filter = ({ onChangeValue, handleChange }) => {
  const handleOnChange = e => {
    handleChange(e.target.value);
  };
  const handleOnSubmit = e => {
    e.preventDefault();
  };
  const handleOnClean = () => {
    handleChange('');
  };
  return (
    <CSSTransition in timeout={250} unmountOnExit classNames={pop}>
      <section className={Styles.section__filter}>
        <form className={Styles.form__filter} onSubmit={handleOnSubmit}>
          <label htmlFor={ALL_ID.htmlFor} className={Styles.form__title}>
            <h4>Fined contacts by name</h4>
            <span className={Styles['form__input-wrap']}>
              <input
                className={Styles.form__input}
                onChange={handleOnChange}
                value={onChangeValue}
                autoComplete="off"
                name="input"
                type="text"
                placeholder="Input fined contacts"
              />
              {onChangeValue.length > 0 && (
                <button
                  type="button"
                  tabIndex={0}
                  className={Styles.formInputBtn}
                  onClick={handleOnClean}
                >
                  <i className="large material-icons">clear</i>
                </button>
              )}
            </span>
          </label>
        </form>
      </section>
    </CSSTransition>
  );
};
Filter.propTypes = {
  onChangeValue: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
export default Filter;
