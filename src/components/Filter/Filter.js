import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import pop from '../../transition/pop.module.css';
import Styles from './Filter.module.css';
import { ALL_ID } from '../../services/constants';
import * as filterActions from '../../redux/filter/filterActions';

const INIT_STATE = {
  input: '',
};
class Filter extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = {
    ...INIT_STATE,
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { input } = this.state;
    const { onSubmit } = this.props;
    onSubmit(input);
  };

  handleOnClean = e => {
    e.preventDefault();
    this.setState({ ...INIT_STATE });
    const { onSubmit } = this.props;
    onSubmit('');
  };

  render() {
    const { input } = this.state;
    return (
      <CSSTransition in timeout={250} unmountOnExit classNames={pop}>
        <section className={Styles.section__filter}>
          <form className={Styles.form__filter} onSubmit={this.handleSubmit}>
            <label htmlFor={ALL_ID.htmlFor} className={Styles.form__title}>
              <h4>Fined contacts by name</h4>
              <span className={Styles['form__input-wrap']}>
                <input
                  className={Styles.form__input}
                  onChange={this.handleChange}
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
                    onClick={this.handleOnClean}
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
  }
}
const mapDispatchToProps = dispatch => ({
  onSubmit: value => dispatch(filterActions.onSubmit(value)),
});
export default connect(null, mapDispatchToProps)(Filter);
