import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import pop from '../../transition/pop.module.css';
import Styles from './Filter.module.css';
import { ALL_ID } from '../../services/constants';

const Filter = ({ input, handleChange }) => {
  const handleOnChange = e => {
    handleChange(e.target.value);
  };
  const handleOnSubmit = e => {
    e.preventDefault();
  };
  const handleOnClean = e => {
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
                value={input}
                name="input"
                type="text"
                placeholder="Input fined contacts"
              />
              {input.length > 0 && (
                <div
                  role="button"
                  tabIndex={0}
                  className={Styles.formInputBtn}
                  onClick={handleOnClean}
                  onKeyPress={() => {}}
                >
                  <i className="large material-icons">clear</i>
                </div>
              )}
            </span>
          </label>
        </form>
      </section>
    </CSSTransition>
  );
};
Filter.propTypes = {
  input: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
export default Filter;
